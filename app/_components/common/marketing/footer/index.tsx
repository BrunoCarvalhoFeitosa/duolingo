"use client"
import { useUser } from "@clerk/nextjs"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Button } from "@/app/_components/ui/button"
import { DuolingoFooterImageSvg } from "@/public/svgs/duolingo-footer-image-svg"
import { DuolingoFooterCharacterImageSvg } from "@/public/svgs/duolingo-footer-character-image-svg"
import { AndroidIconSvg } from "@/public/svgs/android-icon-svg"
import { AppleIconSvg } from "@/public/svgs/apple-icon-svg"

export const Footer = () => {
    const { user } = useUser()
    const { t } = useTranslation()

    const handleRedirectToApp = () => {
        window.location.href = "/learn"
    }

    return (
        <footer className="relative mt-24 w-full">
            <div className="absolute -top-7 lg:top-16 2xl:top-28 left-2/4 -translate-x-2/4 mx-auto w-full md:w-2/4 xl:w-[50%] 2xl:w-[38%] flex flex-col gap-2 md:gap-8 z-10">
                <h3 className="text-xl md:text-4xl xl:text-6xl font-extrabold text-center text-lime-500">
                    {t("footer.title")}
                </h3>
                <div className="mx-auto w-3/4">
                    {user ? (
                            <Button
                                type="button"
                                variant="default"
                                size="lg"
                                className="w-full bg-lime-500"
                                onClick={handleRedirectToApp}
                            >
                                {t("footer.button")}
                            </Button>
                    ) : (
                        <Link href="/register" className="mx-auto w-3/4">
                            <Button
                                type="button"
                                variant="default"
                                size="lg"
                                className="w-full bg-lime-500"
                            >
                                {t("footer.button")}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
            <div className="relative w-full">
                <DuolingoFooterImageSvg />
                <DuolingoFooterCharacterImageSvg />
            </div>
            <div className="-mt-1 py-14 xl:pt-8 w-full bg-lime-500">
                <div className="mx-auto w-3/4 xl:w-[80%] grid grid-cols-1 xl:grid-cols-5 gap-24 place-items-center xl:place-items-start text-center xl:text-left">
                    <div>
                        <h5 className="mb-4 text-lg font-extrabold">
                            {t("footer.columns.institutional.title")}
                        </h5>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="https://store.duolingo.com">
                                    {t("footer.columns.institutional.store")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://press.duolingo.com/#about">
                                    {t("footer.columns.institutional.press")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://careers.duolingo.com/about">
                                    {t("footer.columns.institutional.whoWeAre")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://investors.duolingo.com">
                                    {t("footer.columns.institutional.investors")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://design.duolingo.com">
                                    {t("footer.columns.institutional.guide")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pt.duolingo.com/efficacy">
                                    {t("footer.columns.institutional.efficacy")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-4 text-lg font-extrabold">
                            {t("footer.columns.products.title")}
                        </h5>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="/">
                                    {t("footer.columns.products.duolingo")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://schools.duolingo.com">
                                    {t("footer.columns.products.duolingoForSchools")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://englishtest.duolingo.com/pt">
                                    {t("footer.columns.products.duolingoEnglishTest")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://podcast.duolingo.com">
                                    {t("footer.columns.products.poadcast")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pt.duolingo.com/business">
                                    {t("footer.columns.products.duolingoForBusiness")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pt.duolingo.com/super">
                                    {t("footer.columns.products.superDuolingo")}
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-4 text-lg font-extrabold">
                            {t("footer.columns.support.title")}
                        </h5>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="https://pt.duolingo.com/help">
                                    {t("footer.columns.support.help")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pt.duolingo.com/contact">
                                    {t("footer.columns.support.contact")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pt.duolingo.com/guidelines">
                                    {t("footer.columns.support.communityRules")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pt.duolingo.com/terms">
                                    {t("footer.columns.support.terms")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pt.duolingo.com/privacy">
                                    {t("footer.columns.support.privacy")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://status.duolingo.com">
                                    {t("footer.columns.support.status")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-4 text-lg font-extrabold">
                            {t("footer.columns.social.title")}
                        </h5>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="https://blog.duolingo.com/pt">
                                    {t("footer.columns.social.blog")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/duolingobrasil">
                                    {t("footer.columns.social.instagram")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/DuolingoBrasil">
                                    {t("footer.columns.social.facebook")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://x.com/duolingobrasil">
                                    {t("footer.columns.social.twitter")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/user/duolingo">
                                    {t("footer.columns.social.youtube")}
                                </Link>
                            </li>
                            <li>
                                <Link href="https://dribbble.com/Duolingo">
                                    {t("footer.columns.social.dribble")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3">
                            <h5 className="mb-4 text-lg font-extrabold">
                                {t("footer.columns.download.title")}
                            </h5>
                            <li>
                                <Link href="https://play.google.com/store/apps/details?hl=pt&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsite_map&pli=1">
                                    <Button
                                        type="button"
                                        size="lg"
                                        variant="secondary"
                                        className="flex items-center gap-2 w-full"
                                    >
                                        <div>
                                            <AndroidIconSvg width="40" height="40" />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs font-extrabold uppercase">
                                                {t("footer.columns.download.android.available")}
                                            </span>
                                            <span className="text-base font-extrabold">
                                                {t("footer.columns.download.android.store")}
                                            </span>
                                        </div>
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://apps.apple.com/br/app/duolingo-aprenda-idiomas/id570060128">
                                    <Button
                                        type="button"
                                        size="lg"
                                        variant="secondary"
                                        className="flex items-center gap-2 w-full"
                                    >
                                        <div>
                                            <AppleIconSvg width="45" height="45" />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs font-extrabold uppercase">
                                                {t("footer.columns.download.ios.available")}
                                            </span>
                                            <span className="text-base font-extrabold">
                                                {t("footer.columns.download.ios.store")}
                                            </span>
                                        </div>
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}