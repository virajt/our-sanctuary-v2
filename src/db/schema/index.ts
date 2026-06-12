import { pgTable, serial, text, integer, timestamp, decimal, boolean, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// --- WELLNESS AUTH & MEMBER SCHEMA ---

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  phone: text("phone"),
  memberType: text("member_type", { enum: ["guest", "member", "practitioner", "admin"] }).default("guest"),
  loyaltyPoints: integer('loyalty_points').default(0).notNull(),
  totalSpend: decimal('total_spend', { precision: 10, scale: 2 }).default('0.00').notNull(),
  lastActive: timestamp('last_active').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
});

// --- RETREAT & SESSION SCHEMA ---

export const retreats = pgTable("retreats", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  capacity: integer("capacity").notNull(),
  remainingSlots: integer("remaining_slots").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  status: text("status", { enum: ["upcoming", "active", "completed", "cancelled"] }).default("upcoming"),
  imageUrl: text("image_url"),
});

export const services = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  durationMinutes: integer("duration_minutes").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  isActive: boolean("is_active").default(true),
});

// --- BOOKING & JOURNAL SCHEMA ---

export const bookings = pgTable("bookings", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").references(() => users.id),
  retreatId: uuid("retreat_id").references(() => retreats.id),
  serviceId: uuid("service_id").references(() => services.id),
  bookingDate: timestamp("booking_date").defaultNow(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  status: text("status", { enum: ["confirmed", "attended", "cancelled"] }).default("confirmed"),
  paymentStatus: text("payment_status", { enum: ["unpaid", "paid", "refunded"] }).default("unpaid"),
});

export const wellnessJournal = pgTable("wellness_journal", {
  id: serial("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  bookingId: uuid("booking_id").references(() => bookings.id),
  notes: text("notes"),
  practitionerFeedback: text("practitioner_feedback"),
  createdAt: timestamp("created_at").defaultNow(),
});

// --- RELATIONS ---

export const usersRelations = relations(users, ({ many }) => ({
  bookings: many(bookings),
  journalEntries: many(wellnessJournal),
}));

export const bookingsRelations = relations(bookings, ({ one }) => ({
  user: one(users, { fields: [bookings.userId], references: [users.id] }),
  retreat: one(retreats, { fields: [bookings.retreatId], references: [retreats.id] }),
  service: one(services, { fields: [bookings.serviceId], references: [services.id] }),
}));
