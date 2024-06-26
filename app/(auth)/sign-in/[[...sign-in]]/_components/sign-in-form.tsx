"use client"
import * as Clerk from "@clerk/elements/common"
import * as SignIn from "@clerk/elements/sign-in"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { GoogleIconSvg } from "@/public/svgs/google-icon-svg"
import { MicrosoftIconSvg } from "@/public/svgs/microsoft-icon-svg"

export const SignInForm = () => {
    const { t } = useTranslation()

    return (
        <div className="min-h-96">
            <SignIn.Root>
                <SignIn.Step
                    name="start"
                    className="w-full space-y-6 rounded-2xl py-2 md:py-10 px-4 md:px-0"
                >
                    <Clerk.GlobalError className="block text-sm text-red-600" />
                    <Clerk.Field name="identifier">
                        <Clerk.Label className="sr-only">
                            {t("signInPage.form.inputEmail")}
                        </Clerk.Label>
                        <Clerk.Input
                            required
                            type="email"
                            placeholder={t("signInPage.form.inputEmail")}
                            autoComplete="off"
                            className="w-full border-b border-neutral-100 bg-white p-2 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                        />
                        <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
                    </Clerk.Field>
                    <SignIn.Action
                        submit
                        className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-primary-foreground hover:opacity-90 border-b-4 border-lime-700 h-14 md:h-16 rounded-md px-8 text-xs md:text-base"
                    >
                        {t("signInPage.form.submit")}
                    </SignIn.Action>
                    <div className="rounded-xl bg-neutral-100 p-5">
                        <p className="mb-4 text-center text-sm/5 text-neutral-500">
                            {t("signInPage.platforms.title")}
                        </p>
                        <div className="space-y-2">
                            <Clerk.Connection
                                name="google"
                                className="w-full h-14 border-b-4 border-gray-300 flex items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm md:text-base font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
                            >
                                <GoogleIconSvg width="20" height="20" />
                                {t("signInPage.platforms.googleButton")}
                            </Clerk.Connection>
                        </div>
                        <div className="mt-2 space-y-2">
                            <Clerk.Connection
                                name="microsoft"
                                className="w-full h-14 border-b-4 border-gray-300 flex items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm md:text-base font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
                            >
                                <MicrosoftIconSvg width="20" height="20" />
                                {t("signInPage.platforms.microsoftButton")}
                            </Clerk.Connection>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm md:text-base">
                            {t("signInPage.platforms.haveNotAccount")}
                        </div>
                        <div>
                            <Link
                                href="/sign-up"
                                className="rounded px-1 py-0.5 text-sm md:text-base text-neutral-700 outline-none underline"
                            >
                                {t("signInPage.form.signUpText")}
                            </Link>
                        </div>
                    </div>
                </SignIn.Step>
                <SignIn.Step
                    name="verifications"
                    className="w-full space-y-6 rounded-2xl py-4 md:py-10 px-4 md:px-0"
                >
                    <SignIn.Strategy name="email_code">
                        <header>
                            <h1 className="mt-4 text-base md:text-xl font-medium tracking-tight">
                                {t("authPage.otpVerification.title")}
                            </h1>
                        </header>
                        <Clerk.GlobalError className="block text-sm text-red-600" />
                        <Clerk.Field name="code">
                            <Clerk.Label className="sr-only">
                                {t("authPage.otpVerification.input")}
                            </Clerk.Label>
                            <Clerk.Input
                                required
                                type="otp"
                                placeholder={t("authPage.otpVerification.input")}
                                autoComplete="off"
                                className="w-full border-b border-neutral-100 bg-white px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
                        </Clerk.Field>
                        <SignIn.Action
                            submit
                            className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-primary-foreground hover:opacity-90 border-b-4 border-lime-700 h-14 md:h-16 rounded-md px-8 text-xs md:text-base"
                        >
                            {t("authPage.otpVerification.button")}
                        </SignIn.Action>
                    </SignIn.Strategy>
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm md:text-base">
                            {t("signInPage.platforms.haveNotAccount")}
                        </div>
                        <div>
                            <Link
                                href="/sign-up"
                                className="rounded px-1 py-0.5 text-sm md:text-base text-neutral-700 outline-none underline"
                            >
                                {t("signInPage.form.signUpText")}
                            </Link>
                        </div>
                    </div>
                </SignIn.Step>
            </SignIn.Root>
        </div>
    )
}
