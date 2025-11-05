export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950 py-16 px-4 border-b-4 border-red-600">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-24 h-36 bg-red-600 rounded-lg rotate-12 shadow-2xl"></div>
        <div className="absolute top-32 right-16 w-24 h-36 bg-red-700 rounded-lg -rotate-6 shadow-2xl"></div>
        <div className="absolute bottom-16 left-1/3 w-24 h-36 bg-red-800 rounded-lg rotate-6 shadow-2xl"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-36 bg-red-600 rounded-lg -rotate-12 shadow-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
          Jogo Educativo
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 text-balance tracking-tight">
          Necessário vs Supérfluo
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-3 font-medium max-w-2xl mx-auto">
          Aprenda educação financeira de forma divertida e interativa
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-8 max-w-3xl mx-auto">
          Um jogo de cartas que ensina a diferenciar necessidades de desejos, controlar gastos e tomar decisões
          financeiras inteligentes
        </p>
        <div className="flex flex-wrap gap-4 justify-center text-white text-sm">
          <div className="bg-black/40 backdrop-blur px-4 py-2 rounded-lg border border-red-600/50">
            <span className="text-red-500 font-bold">👥</span> 1-3 jogadores
          </div>
          <div className="bg-black/40 backdrop-blur px-4 py-2 rounded-lg border border-red-600/50">
            <span className="text-red-500 font-bold">⏱️</span> 10-25 minutos
          </div>
          <div className="bg-black/40 backdrop-blur px-4 py-2 rounded-lg border border-red-600/50">
            <span className="text-red-500 font-bold">🎯</span> 9-16 anos
          </div>
        </div>
      </div>
    </section>
  )
}
