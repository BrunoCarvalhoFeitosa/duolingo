import { HeroSection } from "./_components/hero-section"
import { FreeUseSection } from "./_components/free-use-section"
import { BoredSection } from "./_components/bored-section"
import { AdvanceStepsSection } from "./_components/advance-steps-section"
import { DownloadSection } from "./_components/download-section"
import { TiredSection } from "./_components/tired-section"
import { TrainingSection } from "./_components/training-section"
import { ScrollTop } from "../_components/common/marketing/scroll-top"
import { WinnerSection } from "./_components/winner-section"
import { Footer } from "../_components/common/marketing/footer"

const HomePage = () => {
  return (
    <main>
        <HeroSection />
        <FreeUseSection />
        <BoredSection />
        <AdvanceStepsSection />
        <DownloadSection />
        <TiredSection />
        <TrainingSection />
        <WinnerSection />
        <ScrollTop />
        <Footer />
    </main>
  )
}

export default HomePage