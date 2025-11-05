import './App.css'
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PreparationSection } from "@/components/preparation-section"
import { HowToPlaySection } from "@/components/how-to-play-section"
import { DownloadDialog } from "@/components/download-dialog"
import { GameModesSection } from "@/components/game-modes-section"
import { ComponentsSection } from "@/components/components-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />

      <div className="sticky top-4 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <DownloadDialog />
        </div>
      </div>

      <AboutSection />
      <PreparationSection />

      <HowToPlaySection />

      <GameModesSection />
      <ComponentsSection />

      <footer className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-12 px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-3">Necessário vs Supérfluo</h3>
          <p className="text-lg opacity-95 mb-2">Aprenda educação financeira brincando!</p>
          <p className="text-sm opacity-80 mb-6">
            Jogo educativo para ensinar controle financeiro e tomada de decisões inteligentes
          </p>
          <div className="inline-block bg-black/30 backdrop-blur px-6 py-3 rounded-full border border-white/30">
            <p className="text-xs font-bold">🎓 Desenvolvido para crianças e adolescentes de 9 a 16 anos</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
