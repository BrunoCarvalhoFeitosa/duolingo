import { HomeHeroSection } from "@/app/(marketing)/_components/home-hero-section"
import { HomeFreeUseSection } from "@/app/(marketing)/_components/home-free-use-section"
import { HomeBoredSection } from "@/app/(marketing)/_components/home-bored-section"
import { HomeAdvanceStepsSection } from "@/app/(marketing)/_components/home-advance-steps-section"
import { HomeDownloadSection } from "@/app/(marketing)/_components/home-download-section"
import { HomeTiredSection } from "@/app/(marketing)/_components/home-tired-section"
import { HomeTrainingSection } from "@/app/(marketing)/_components/home-training-section"
import { HomeWinnerSection } from "@/app/(marketing)/_components/home-winner-section"
import { ScrollTop } from "@/app/_components/common/marketing/scroll-top"
import { Footer } from "@/app/_components/common/marketing/footer"

const HomePage = () => {
  return (
    <main>
        <HomeHeroSection />
        <HomeFreeUseSection />
        <HomeBoredSection />
        <HomeAdvanceStepsSection />
        <HomeDownloadSection />
        <HomeTiredSection />
        <HomeTrainingSection />
        <HomeWinnerSection />
        <ScrollTop />
        <Footer />
    </main>
  )
}

export default HomePage