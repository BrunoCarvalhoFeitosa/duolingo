"use client"
import { cn } from "@/app/_libs/utils"
import { useSelectLanguage } from "@/store/use-language"
import { languages } from "@/app/_utils/languages"
import { Button } from "@/app/_components/ui/button"
import Image from "next/image"

export const LanguageSelector = () => {
    const { setSelectedLanguage, selectedLanguage } = useSelectLanguage()

    const handleChooseLanguage = (language: string) => {
        if (selectedLanguage) {
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