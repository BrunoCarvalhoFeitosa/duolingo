import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationsInBra from "@/app/locales/br/translation.json"
import translationsInEng from "@/app/locales/en/translation.json"
import translationsInEsp from "@/app/locales/es/translation.json"
import translationsInFra from "@/app/locales/fra/translation.json"
import translationsInIta from "@/app/locales/ita/translation.json"
import translationsInGer from "@/app/locales/ger/translation.json"
import translationsInRus from "@/app/locales/rus/translation.json"
import translationsInChn from "@/app/locales/chn/translation.json"
import translationsInJpn from "@/app/locales/jpn/translation.json"

const resources = {
  br: {
    translation: translationsInBra,
  },
  en: {
    translation: translationsInEng,
  },
  es: {
    translation: translationsInEsp,
  },
  fra: {
    translation: translationsInFra,
  },
  ita: {
    translation: translationsInIta,
  },
  ger: {
    translation: translationsInGer,
  },
  rus: {
    translation: translationsInRus,
  },
  chn: {
    translation: translationsInChn,
  },
  jpn: {
    translation: translationsInJpn,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "br",
  debug: true,
  fallbackLng: "br",
  ns: "translation",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
