"use client"
import { useTranslation } from "react-i18next"
import Image from "next/image"

export const HomeDownloadSection = () => {
  const { t } = useTranslation()

  return (
    <section className="relative py-16 px-5 w-full bg-lime-500 overflow-hidden">
        <div className="mb-10 w-full">
            <h3 className="mx-auto w-full xl:w-2/4 text-5xl font-bold text-center">
                {t("homePage.downloadSection.title")}
            </h3>
            <p className="mt-2 mx-auto lg:w-3/4 xl:w-2/4 text-base text-center">
                {t("homePage.downloadSection.description")}
            </p>
        </div>
        <div className="relative translate-x-7 mx-auto flex justify-center w-full md:w-[80%] xl:w-2/5 h-[360px] md:h-[55dvh] lg:[65dvh] xl:lg:h-[80dvh]">
            <Image
                fill
                src="/images/image-duolingo-app-screen.png"
                alt="Duolingo app"
                className="w-full h-full"
            />
        </div>
    </section>
  )
}