"use client"
import { useTranslation } from "react-i18next"
import { DuolingoBoredImageSvg } from "@/public/svgs/duolingo-bored-image-svg"

export const HomeBoredSection = () => {
    const { t } = useTranslation()

  return (
    <section className="pt-10 md:pt-28 px-5 w-full bg-white">
      <div className="mx-auto flex flex-col xl:flex-row w-full 2xl:w-3/4">
        <div className="order-2 xl:order-1 md:mt-12 mx-auto flex flex-1 justify-center w-[48%] md:w-full">
          <DuolingoBoredImageSvg width="500" height="300" />
        </div>
        <div className="order-1 xl:order-2 flex justify-center items-center">
          <div className="mx-auto w-full lg:w-3/4 text-center xl:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-lime-400">
              {t("homePage.boredSection.title")}
            </h2>
            <p>{t("homePage.boredSection.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}