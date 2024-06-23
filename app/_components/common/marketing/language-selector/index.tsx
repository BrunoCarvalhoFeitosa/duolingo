"use client"
import { useState } from "react"
import i18n from "@/app/i18n"
import { cn } from "@/app/_libs/utils"
import { languages } from "@/app/_utils/languages"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"

export const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language)


    const handleChooseLanguage = (language: string) => {
        if (selectedLanguage) {
            i18n.changeLanguage(language)
            setSelectedLanguage(language)
        }
    }

    return (
        <div className="flex items-center gap-2">
            {languages.map((language) => (
                <div key={language.id}>
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={() => handleChooseLanguage(language.value)}
                        className={cn(
                            "p-0 w-fit",
                            `${selectedLanguage === language.value ? "animate-bounce": "animate-none"}`
                        )}
                    >
                        <Image
                            src={language.icon}
                            width={38}
                            height={38}
                            alt={language.label}
                        />
                    </Button>
                </div>
            ))}
        </div>
    )
}