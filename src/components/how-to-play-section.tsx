import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion"

export function HowToPlaySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-red-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Como Jogar: Os 3 Rounds</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada rodada tem um desafio diferente e ensina uma habilidade financeira
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          <AccordionItem value="round-1" className="bg-black/50 rounded-2xl border-2 border-red-600/50 px-8 py-2">
            <AccordionTrigger className="text-xl md:text-2xl font-bold text-white hover:text-red-500 hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl font-black shrink-0">
                  1
                </div>
                <span className="text-left">Round 1: Livre (Conhecimento Prévio)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pt-4 pb-6 space-y-4">
              <p className="leading-relaxed text-lg">
                Neste round, não há cenário ou orçamento. É hora de mostrar seu conhecimento sobre o que é realmente
                necessário na vida.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                  <span>📋</span> Como funciona:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>
                      Escolha até <strong className="text-white">4 cartas</strong> da sua mão
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Revele suas cartas escolhidas para todos verem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Calcule seus pontos baseado nas categorias das cartas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-950/30 rounded-xl p-5 border border-red-800/50">
                <p className="font-bold flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <span>Dica: Pense no que você realmente precisa no dia a dia, não no que você quer</span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="round-2" className="bg-black/50 rounded-2xl border-2 border-red-700/50 px-8 py-2">
            <AccordionTrigger className="text-xl md:text-2xl font-bold text-white hover:text-red-500 hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-700 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl font-black shrink-0">
                  2
                </div>
                <span className="text-left">Round 2: Cenário Específico</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pt-4 pb-6 space-y-4">
              <p className="leading-relaxed text-lg">
                Agora as coisas ficam mais interessantes! Uma carta de cenário é revelada e você precisa adaptar suas
                escolhas.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                  <span>📋</span> Como funciona:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Revele 1 carta de cenário (ex: "Volta às aulas", "Aniversário", "Viagem")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>
                      Escolha até <strong className="text-white">5 cartas</strong> que façam sentido para o cenário
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Você pode comprar 1 carta extra do monte se precisar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Somente cartas compatíveis com o cenário pontuam</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-950/30 rounded-xl p-5 border border-red-800/50">
                <p className="font-bold flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <span>
                    Exemplo: Se o cenário é "Volta às aulas", escolha cadernos, lápis, mochila - não videogame!
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="round-3" className="bg-black/50 rounded-2xl border-2 border-red-800/50 px-8 py-2">
            <AccordionTrigger className="text-xl md:text-2xl font-bold text-white hover:text-red-500 hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-800 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl font-black shrink-0">
                  3
                </div>
                <span className="text-left">Round 3: Cenário + Orçamento (Desafio Final)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pt-4 pb-6 space-y-4">
              <p className="leading-relaxed text-lg">
                O round mais desafiador! Agora você tem um cenário E um orçamento limitado. Hora de mostrar suas
                habilidades financeiras!
              </p>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                  <span>📋</span> Como funciona:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Revele um novo cenário e um valor de orçamento (budget)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>
                      Escolha até <strong className="text-white">6 cartas</strong> que sejam compatíveis com o cenário
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Some os preços das cartas - tente não ultrapassar o orçamento!</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">•</span>
                    <span>Cartas incompatíveis não são permitidas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 rounded-xl p-5 border-2 border-yellow-600/50">
                <p className="text-yellow-200 font-bold flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                  <span>
                    ATENÇÃO: Gastar mais que o orçamento é permitido, mas você perde pontos! Para cada 10% acima do
                    budget, perde 1 ponto.
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 bg-black/30 backdrop-blur rounded-xl p-5 text-center border border-gray-700">
          <p className="text-lg font-semibold text-gray-300">
            🏆 Após os 3 rounds, some todos os pontos - quem tiver mais pontos vence!
          </p>
        </div>
      </div>
    </section>
  )
}
