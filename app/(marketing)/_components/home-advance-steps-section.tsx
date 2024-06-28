"use client"
import { useTranslation } from "react-i18next"
import { DuolingoAngryImageSvg } from "@/public/svgs/duolingo-angry-image-svg"

export const HomeAdvanceStepsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-28 px-5 w-full bg-white">
      <div className="mx-auto flex flex-col xl:flex-row w-full 2xl:w-3/4">
        <div className="flex justify-center items-center">
          <div className="mx-auto w-full lg:w-3/4 text-center xl:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-lime-400">
              {t("homePage.advanceStepsSection.title")}
            </h2>
            <p>{t("homePage.advanceStepsSection.description")}</p>
          </div>
        </div>
        <div className="md:mt-12 mx-auto flex flex-1 justify-center w-[60%] md:w-full">
          <DuolingoAngryImageSvg width="500" height="350" />
        </div>
      </div>
    </section>
  )
}