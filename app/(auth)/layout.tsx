"use client"
import { Fragment, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { DuolingoIcon } from "@/app/_components/common/globals/doulingo-icon"
import { LanguageSelector } from "@/app/_components/common/marketing/language-selector"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { t } = useTranslation()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <Fragment>
            {isLoaded && (
                <div className="flex justify-center items-center w-full min-h-[100dvh]">
                    <div className="px-0 md:px-8 mx-auto w-full xl:w-[40%] h-full">
                        <div className="h-full flex flex-col w-full justify-center">
                            <div className="px-4 md:px-0">
                                <div className="mb-6">
                                    <DuolingoIcon href="/" />
                                </div>
                                <div className="w-full">
                                    <LanguageSelector />
                                </div>
                                <div className="mb-10">
                                    <h1 className="text-xl md:text-3xl lg:text-[38px] lg:leading-normal font-extrabold">
                                        {t("authPage.title")}
                                    </h1>
                                    <p className="text-sm md:text-base">
                                        {t("authPage.description")}
                                    </p>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default AuthLayout