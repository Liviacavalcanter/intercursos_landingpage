export function GameModesSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-black">Modos de Jogo</h2>
        <p className="text-center text-gray-600 mb-12">Jogue sozinho ou com amigos</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border-4 border-red-600 shadow-xl">
            <div className="text-6xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-black mb-4 text-center text-red-600">Modo Solo</h3>
            <p className="text-gray-700 mb-6 text-center leading-relaxed">
              Jogue sozinho e tente bater as metas de pontuação. Perfeito para treinar suas habilidades financeiras!
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
              <h4 className="font-bold text-black mb-3 text-center">🎯 Metas de Pontuação</h4>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-amber-100 to-amber-200 border-2 border-amber-400 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🥉</span>
                    <span className="font-black text-amber-900">Bronze</span>
                  </div>
                  <span className="text-2xl font-black text-amber-900">15+ pts</span>
                </div>
                <div className="bg-gradient-to-r from-gray-200 to-gray-300 border-2 border-gray-400 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🥈</span>
                    <span className="font-black text-gray-900">Prata</span>
                  </div>
                  <span className="text-2xl font-black text-gray-900">25+ pts</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 border-2 border-yellow-500 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🥇</span>
                    <span className="font-black text-yellow-900">Ouro</span>
                  </div>
                  <span className="text-2xl font-black text-yellow-900">35+ pts</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <p className="text-red-800 text-sm font-medium text-center">
                💡 Dica: Tente melhorar sua pontuação a cada partida!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border-4 border-red-600 shadow-xl text-white">
            <div className="text-6xl mb-4 text-center">👥</div>
            <h3 className="text-2xl font-black mb-4 text-center text-red-500">Modo Multiplayer</h3>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Jogue com 2-3 amigos e descubra quem toma as melhores decisões financeiras!
            </p>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6 border border-white/20">
              <h4 className="font-bold text-white mb-4 text-center">📋 Como Funciona</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3 bg-black/30 rounded-lg p-3">
                  <span className="text-red-500 text-xl flex-shrink-0">1.</span>
                  <span>Cada jogador joga os 3 rounds individualmente</span>
                </li>
                <li className="flex items-start gap-3 bg-black/30 rounded-lg p-3">
                  <span className="text-red-500 text-xl flex-shrink-0">2.</span>
                  <span>Anote os pontos de cada round na folha de pontuação</span>
                </li>
                <li className="flex items-start gap-3 bg-black/30 rounded-lg p-3">
                  <span className="text-red-500 text-xl flex-shrink-0">3.</span>
                  <span>Some todos os pontos - maior pontuação total vence</span>
                </li>
                <li className="flex items-start gap-3 bg-black/30 rounded-lg p-3">
                  <span className="text-red-500 text-xl flex-shrink-0">4.</span>
                  <span>Em caso de empate, vence quem gastou menos no Round 3</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-600 rounded-xl p-4 border-2 border-red-400">
              <p className="text-white text-sm font-bold text-center">
                🎉 Mais divertido em grupo! Discutam as escolhas e aprendam juntos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
