"use client";
import { useTranslation } from "react-i18next";
import { DuolingoTrainingImageSvg } from "@/public/svgs/duolingo-training-image-svg";

<<<<<<< HEAD:app/(marketing)/_components/training-section.tsx
export const TrainingSection = () => {
  const { t } = useTranslation();
=======
export const HomeTrainingSection = () => {
    const { t } = useTranslation()
>>>>>>> 527334eb347a4e1d378ea21e68d267806d59566c:app/(marketing)/_components/home-training-section.tsx

  return (
    <section className="pt-10 md:pt-28 px-5 w-full bg-white">
      <div className="mx-auto flex flex-col xl:flex-row w-full 2xl:w-3/4">
        <div className="flex justify-center items-center">
          <div className="mx-auto w-full lg:w-3/4 text-center xl:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-lime-400">
              {t("homePage.trainingSection.title")}
            </h2>
            <p>{t("homePage.trainingSection.description")}</p>
          </div>
        </div>
        <div className="md:mt-12 mx-auto flex flex-1 justify-center w-[70%] md:w-full">
          <DuolingoTrainingImageSvg width="450" height="auto" />
        </div>
      </div>
    </section>
  );
};
