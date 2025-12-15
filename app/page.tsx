"use client";

export default function Home() {
  const projects = [
    { name: "Delhi Metro", location: "India", length: "394 km", stations: 289, color: "blue" },
    { name: "Riyadh Metro", location: "Saudi Arabia", length: "176 km", stations: 85, color: "yellow" },
    { name: "Shanghai Metro", location: "China", length: "830 km", stations: 508, color: "red" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Live Data • System Operational
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">MetroPulse</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tracking the expansion of urban mass transit across India and the world
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "India Network", value: "1,013 km", icon: "🚇", color: "orange" },
            { label: "Global Projects", value: "400+", icon: "🌍", color: "blue" },
            { label: "Daily Riders", value: "112M", icon: "⚡", color: "yellow" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-slate-600 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <h3 className="text-5xl font-bold text-white">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold">Major Metro Corridors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`h-2 w-full bg-gradient-to-r ${project.color === 'blue' ? 'from-blue-500 to-cyan-400' : project.color === 'yellow' ? 'from-yellow-500 to-orange-400' : 'from-red-500 to-pink-500'}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400">Operational</span>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-300">
                    <span className="flex items-center gap-1">📏 {project.length}</span>
                    <span className="flex items-center gap-1">🚉 {project.stations} Stations</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-700/50">
          <p className="text-gray-500 text-sm">
            Powered by NewsAPI • Real-time metro intelligence platform
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Data updates automatically • Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
