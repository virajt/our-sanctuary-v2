import { pgTable, text, timestamp, integer, numeric, boolean, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  memberType: text("member_type", { enum: ["guest", "member", "practitioner"] }).default("guest"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const retreats = pgTable("retreats", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  capacity: integer("capacity").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  status: text("status", { enum: ["upcoming", "active", "completed"] }).default("upcoming"),
});

export const services = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  isActive: boolean("is_active").default(true),
});

export const bookings = pgTable("bookings", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  retreatId: uuid("retreat_id").references(() => retreats.id),
  serviceId: uuid("service_id").references(() => services.id),
  bookingDate: timestamp("booking_date").defaultNow(),
  status: text("status", { enum: ["confirmed", "cancelled"] }).default("confirmed"),
});
