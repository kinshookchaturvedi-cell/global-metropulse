export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">MetroPulse</span>
          </h1>
          <p className="text-xl text-gray-300">Tracking urban mass transit expansion across India and the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400 mb-2">India Network</h3>
            <p className="text-4xl font-bold">1,013 km</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400 mb-2">Global Projects</h3>
            <p className="text-4xl font-bold">400+</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400 mb-2">Daily Riders</h3>
            <p className="text-4xl font-bold">112M</p>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Featured Metro Systems</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold">Delhi Metro</h3>
              <p className="text-gray-400">394 km • 289 stations • India</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-bold">Riyadh Metro</h3>
              <p className="text-gray-400">176 km • 85 stations • Saudi Arabia</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-bold">Shanghai Metro</h3>
              <p className="text-gray-400">830 km • 508 stations • China</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>Powered by NewsAPI • Data updates automatically</p>
        </div>
      </div>
    </div>
  );
}
