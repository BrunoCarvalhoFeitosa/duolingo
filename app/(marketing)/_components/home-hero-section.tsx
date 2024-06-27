"use client"
import Link from "next/link"
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"
import { useTranslation } from "react-i18next"
import { Button } from "@/app/_components/ui/button"
import { Header } from "@/app/_components/common/marketing/header"
import { LanguageSelector } from "@/app/_components/common/marketing/language-selector"
import { DuolingoHeroImageSvg } from "@/public/svgs/duolingo-hero-image-svg"
import { LoaderIcon } from "lucide-react"

export const HomeHeroSection = () => {
    const { user } = useUser()
    const { t } = useTranslation()

    const handleRedirectToApp = () => {
        window.location.href = "/learn"
    }

    return (
        <article className="w-full min-h-[100dvh] xl:min-h-max xl:h-[calc(100dvh-10rem)] bg-lime-500">
            <div className="flex flex-col xl:flex-row w-full h-full">
                <div className="w-full xl:w-[60%]">
                    <DuolingoHeroImageSvg />
                </div>
                <div className="relative h-full w-full xl:w-[40%] bg-lime-500">
                    <Header />
                    <div className="h-full flex w-full items-center">
                        <div className="px-4 lg:px-8">
                            {user && (
                                <div className="mb-6 flex flex-col gap-2">
                                    <div className="w-full">
                                        <div className="flex gap-2 items-center">
                                            <ClerkLoading>
                                                <LoaderIcon className="w-8 h-8 text-muted-foreground animate-spin" />
                                            </ClerkLoading>
                                            <ClerkLoaded>
                                                <UserButton
                                                    afterSignOutUrl="/"
                                                    appearance={{
                                                        elements: {
                                                            avatarBox: "w-12 h-12 lg:w-14 lg:h-14"
                                                        }
                                                    }}
                                                />
                                            </ClerkLoaded>
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
                                <h1 className="text-2xl md:text-3xl lg:text-[38px] lg:leading-normal font-extrabold">
                                    {t("homePage.hero.title")}
                                </h1>
                                <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold">
                                   {t("homePage.hero.subtitle")}
                                </h2>
                                <p className="mt-3">
                                    {t("homePage.hero.description")}
                                </p>
                            </div>
                             {user ? (
                                <div className="w-full">
                                    <Button
                                        type="button"
                                        size="lg"
                                        className="w-full"
                                        onClick={handleRedirectToApp}
                                    >
                                        {t("homePage.hero.registerButton")}
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <div className="w-full">
                                        <Link href="/sign-up">
                                            <Button
                                                type="button"
                                                size="lg"
                                                className="w-full"
                                            >
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