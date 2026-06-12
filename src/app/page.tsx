import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#fdfcfb] text-[#2d3436]">
      <header className="fixed top-0 w-full p-8 flex justify-between items-center bg-[#fdfcfb]/70 backdrop-blur-lg z-50">
        <h1 className="text-3xl font-serif italic nature-gradient">Our Sanctuary</h1>
        <nav className="space-x-12 hidden md:flex text-sm tracking-widest text-[#788574] font-medium">
          <a href="#" className="hover:text-[#2d3436] transition-colors">Retreats</a>
          <a href="#" className="hover:text-[#2d3436] transition-colors">Wellness</a>
          <a href="#" className="hover:text-[#2d3436] transition-colors">Journal</a>
          <a href="#" className="hover:text-[#2d3436] transition-colors">Connect</a>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center space-y-16 max-w-4xl mt-24">
        <div className="relative w-64 h-64 mb-4 flex items-center justify-center">
           {/* Serene organic shape placeholder */}
           <div className="absolute inset-0 bg-[#e9edc9] rounded-full blur-3xl opacity-30 animate-pulse"></div>
           <div className="relative border border-[#788574]/30 p-12 rounded-full italic font-serif text-[#788574] text-5xl">
              S
           </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl md:text-8xl font-serif italic nature-gradient leading-tight">
            Find Your Stillness
          </h2>
          <p className="text-xl md:text-2xl text-[#788574] font-light italic max-w-2xl mx-auto leading-relaxed">
            A sanctuary for the soul, designed to restore your natural rhythm and awaken your inner peace.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          <button className="sage-button text-lg font-medium tracking-wide">
            Explore Retreats
          </button>
          <button className="text-[#788574] border-b border-[#788574]/20 hover:border-[#788574] transition-all pb-1 tracking-widest uppercase text-xs font-bold">
            The Philosophy
          </button>
        </div>
      </main>

      <footer className="mt-32 p-12 w-full text-center text-[#788574]/50 text-xs tracking-widest uppercase">
        © 2026 Our Sanctuary. Managed by Project Phoenix.
      </footer>
    </div>
  );
}
