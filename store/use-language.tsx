import { create } from "zustand"
import i18n from "@/app/i18n"

type LanguageState = {
    selectedLanguage: string
    setSelectedLanguage: (language: string) => void
}

export const useSelectLanguage = create<LanguageState>((set) => ({
    selectedLanguage: i18n.language,
    setSelectedLanguage: (language) => {
        set({ selectedLanguage: language })
        i18n.changeLanguage(language)
    }
}))