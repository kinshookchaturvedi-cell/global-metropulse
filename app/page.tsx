export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Global MetroPulse
        </h1>
        <p className="text-slate-400 mt-2">
          Tracking the expansion of urban mass transit across India and the world
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 uppercase">Active Projects</h3>
          <p className="text-3xl font-bold mt-2 text-blue-400">127</p>
        </div>
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 uppercase">Total Length</h3>
          <p className="text-3xl font-bold mt-2 text-purple-400">4,832 km</p>
        </div>
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 uppercase">Countries</h3>
          <p className="text-3xl font-bold mt-2 text-emerald-400">42</p>
        </div>
      </section>

      <div className="mt-8 text-center text-slate-500 text-sm">
        <p>Powered by React Query & Zustand • Real-time metro intelligence platform</p>
        <p>Data updates automatically • Built with Next.js, React Query & Tailwind CSS</p>
      </div>
    </main>
  );
}
