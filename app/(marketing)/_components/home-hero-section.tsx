"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/app/_components/ui/button"
import { Header } from "@/app/_components/common/marketing/header"
import { LanguageSelector } from "@/app/_components/common/marketing/language-selector"
import { DuolingoHeroImageSvg } from "@/public/svgs/duolingo-hero-image-svg"
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"

export const HomeHeroSection = () => {
  const { t } = useTranslation()
  const { user } = useUser()

  return (
    <article className="w-full min-h-[100dvh] xl:min-h-max lg:min-h-[calc(100dvh-3rem)] 2xl:h-[calc(100dvh-10rem)]">
      <div className="flex flex-col xl:flex-row w-full h-full">
        <div className="w-full xl:w-[60%]">
          <DuolingoHeroImageSvg />
        </div>
        <div className="relative py-10 xl:py-0 w-full h-auto xl:w-[40%] bg-lime-500">
          <Header />
          <div className="h-full flex w-full items-center">
            <div className="px-4 lg:px-8">
              {user && (
                <div className="mb-6 flex flex-col gap-2">
                  <div className="w-full">
                    <div className="flex gap-2 items-center">
                      <div>
                        <Avatar>
                          <AvatarImage
                            src={user.imageUrl}
                            alt={user.fullName as string}
                          />
                        </Avatar>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold leading-none">
                          Bem-vindo,
                        </h4>
                        <p className="text-base leading-none">
                          {user.fullName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="w-full">
                <LanguageSelector />
              </div>
              <div className="mb-10">
                <h1 className="text-2xl md:text-3xl lg:text-[28px] 2xl:text-[38px] lg:leading-normal font-extrabold">
                  {t("homePage.hero.title")}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-[28px] 2xl:text-[38px] font-extrabold">
                  {t("homePage.hero.subtitle")}
                </h2>
                <p className="mt-3">{t("homePage.hero.description")}</p>
              </div>
              {user ? (
                <div className="w-full">
                  <Link href="/learn">
                    <Button type="button" size="lg" className="w-full">
                      {t("homePage.hero.registerButton")}
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="w-full">
                    <Link href="/sign-up">
                      <Button type="button" size="lg" className="w-full">
                        {t("homePage.hero.registerButton")}
                      </Button>
                    </Link>
                  </div>
                  <div className="w-full">
                    <Link href="/sign-in">
                      <Button
                        type="button"
                        size="lg"
                        variant="ghost"
                        className="w-full"
                      >
                        {t("homePage.hero.loginButton")}
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}