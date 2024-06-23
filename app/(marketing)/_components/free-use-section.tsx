"use client"
import { useTranslation } from "react-i18next"
import { DuolingoHappyImageSvg } from "@/public/svgs/duolingo-happy-image-svg"

export const FreeUseSection = () => {
    const { t } = useTranslation()

    return (
        <section className="pt-28 px-5 w-full bg-white">
            <div className="mx-auto flex flex-col xl:flex-row w-full xl:w-3/4">
                <div className="flex justify-center items-center">
                    <div className="mx-auto w-full lg:w-3/4 text-center xl:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-lime-400">
                            {t("homePage.freeUseSection.title")}
                        </h2>
                        <p>
                            {t("homePage.freeUseSection.description")}
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex flex-1 justify-center w-full">
                    <DuolingoHappyImageSvg width="500" height="350" />
                </div>
            </div>
        </section>
    )
}