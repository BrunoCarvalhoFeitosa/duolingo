"use client";
import { useTranslation } from "react-i18next";
import { DuolingoSadImageSvg } from "@/public/svgs/duolingo-sad-image-svg";

<<<<<<< HEAD:app/(marketing)/_components/tired-section.tsx
export const TiredSection = () => {
  const { t } = useTranslation();
=======
export const HomeTiredSection = () => {
    const { t } = useTranslation()
>>>>>>> 527334eb347a4e1d378ea21e68d267806d59566c:app/(marketing)/_components/home-tired-section.tsx

  return (
    <section className="pt-10 md:pt-28 px-5 w-full bg-white">
      <div className="mx-auto flex flex-col xl:flex-row w-full 2xl:w-3/4">
        <div className="order-2 xl:order-1 md:mt-12 mx-auto flex flex-1 justify-center w-[48%] md:w-full">
          <DuolingoSadImageSvg width="500" height="300" />
        </div>
        <div className="order-1 xl:order-2 flex justify-center items-center">
          <div className="mx-auto w-full lg:w-3/4 text-center xl:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-lime-400">
              {t("homePage.tiredSection.title")}
            </h2>
            <p>{t("homePage.tiredSection.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
