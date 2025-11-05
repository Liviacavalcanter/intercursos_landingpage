import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PreparationSection } from "@/components/preparation-section"
import { HowToPlaySection } from "@/components/how-to-play-section"
import { DownloadDialog } from "@/components/download-dialog"
import { GameModesSection } from "@/components/game-modes-section"
import { ComponentsSection } from "@/components/components-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden max-w-full">
      <HeroSection />

      <div className="sticky top-4 z-50 flex justify-center pointer-events-none -mt-16">
        <div className="pointer-events-auto">
          <DownloadDialog />
        </div>
      </div>

      <AboutSection />
      <PreparationSection />

      <HowToPlaySection />

      <GameModesSection />
      <ComponentsSection />

      <footer className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-6 px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-black mb-2">Necessário vs Dispensável</h3>
          <p className="text-sm opacity-90 mb-1">Aprenda educação financeira brincando!</p>
          <p className="text-xs opacity-75">🎓 Desenvolvido para crianças e adolescentes de 9 a 16 anos</p>
        </div>
      </footer>
    </div>
  )
}
