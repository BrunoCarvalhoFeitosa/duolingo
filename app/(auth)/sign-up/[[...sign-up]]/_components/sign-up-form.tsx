"use client"
import * as Clerk from "@clerk/elements/common"
import * as SignUp from "@clerk/elements/sign-up"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { GoogleIconSvg } from "@/public/svgs/google-icon-svg"
import { Button } from "@/app/_components/ui/button"
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { t } = useTranslation()

    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="min-h-96">
            <SignUp.Root>
                <SignUp.Step
                    name="start"
                    className="w-full space-y-6 rounded-2xl py-2 md:py-10 px-4 md:px-0"
                >
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 w-full">
                            <Clerk.Field name="firstName" className="flex-1 space-y-2">
                                <Clerk.Input
                                    required
                                    type="text"
                                    placeholder={t("signUpPage.form.inputFirstName")}
                                    autoComplete="off"
                                    className="w-full border-b border-neutral-100 bg-white py-2 px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                                />
                                <Clerk.FieldError className="block text-sm text-red-400" />
                            </Clerk.Field>
                            <Clerk.Field name="lastName" className="flex-1 space-y-2">
                                <Clerk.Input
                                    required
                                    type="text"
                                    placeholder={t("signUpPage.form.inputLastName")}
                                    autoComplete="off"
                                    className="w-full border-b border-neutral-100 bg-white py-2 px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                                />
                                <Clerk.FieldError className="block text-sm text-red-400" />
                            </Clerk.Field>
                        </div>
                        <Clerk.Field name="username" className="space-y-2">
                                <Clerk.Input
                                    required
                                    type="text"
                                    placeholder={t("signUpPage.form.inputUsername")}
                                    autoComplete="off"
                                    className="w-full border-b border-neutral-100 bg-white py-2 px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                                />
                                <Clerk.FieldError className="block text-sm text-red-400" />
                            </Clerk.Field>
                        <Clerk.Field name="emailAddress" className="space-y-2">
                            <Clerk.Input
                                required
                                type="email"
                                placeholder={t("signUpPage.form.inputEmail")}
                                autoComplete="off"
                                className="w-full border-b border-neutral-100 bg-white py-2 px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                        <Clerk.Field name="password" className="relative space-y-2">
                            <Clerk.Input
                                required
                                type={showPassword ? "text" : "password"}
                                placeholder={t("signUpPage.form.inputPassword")}
                                className="w-full border-b border-neutral-100 bg-white py-2 px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="p-0 absolute -top-3 right-0"
                                onClick={handleShowOrHidePassword}
                            >
                                {showPassword ? (
                                    <EyeOffIcon size={24} className="text-lime-600" />
                                ) : (
                                    <EyeIcon size={24} className="text-lime-600" />
                                )}
                            </Button>
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                    </div>
                    <SignUp.Action
                        submit
                        className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-primary-foreground hover:opacity-90 border-b-4 border-lime-700 h-14 md:h-16 rounded-md px-8 text-xs md:text-base"
                    >
                        {t("signUpPage.form.submit")}
                    </SignUp.Action>
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm md:text-base">
                            {t("signUpPage.platforms.haveAccount")}
                        </div>
                        <div>
                            <Link
                                href="/sign-in"
                                className="rounded px-1 py-0.5 text-sm md:text-base text-neutral-700 outline-none underline"
                            >
                                {t("signUpPage.form.signInText")}
                            </Link>
                        </div>
                    </div>
                </SignUp.Step>
                <SignUp.Step
                    name="verifications"
                    className="w-full space-y-6 rounded-2xl py-2 md:py-10 px-4 md:px-0"
                >
                    <header>
                        <h1 className="mt-4 text-base md:text-xl font-medium tracking-tight">
                            {t("authPage.otpVerification.title")}
                        </h1>
                    </header>
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <SignUp.Strategy name="email_code">
                        <Clerk.Field name="code" className="space-y-2">
                            <Clerk.Input
                                type="otp"
                                required
                                className="w-full border-b border-neutral-100 bg-white py-2 px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                        <SignUp.Action
                            submit
                            className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-primary-foreground hover:opacity-90 border-b-4 border-lime-700 h-14 md:h-16 rounded-md px-8 text-xs md:text-base"
                        >
                            {t("authPage.otpVerification.button")}
                        </SignUp.Action>
                    </SignUp.Strategy>
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm md:text-base">
                            {t("signUpPage.platforms.haveAccount")}
                        </div>
                        <div>
                            <Link
                                href="/sign-in"
                                className="rounded px-1 py-0.5 text-sm md:text-base text-neutral-700 outline-none underline"
                            >
                                {t("signUpPage.form.signInText")}
                            </Link>
                        </div>
                    </div>
                </SignUp.Step>
                <SignUp.Step
                    name="continue"
                    className="w-full space-y-6 rounded-2xl py-2 md:py-10 px-4 md:px-0"
                >
                <header>
                    <h1 className="mt-4 text-base md:text-xl font-medium tracking-tight">
                        {t("signUpPage.form.continueRegistrationText")}
                    </h1>
                </header>
                <Clerk.GlobalError className="block text-sm text-red-400" />
                <Clerk.Field name="username" className="space-y-2">
                    <Clerk.Input
                        required
                        type="text"
                        placeholder={t("signUpPage.form.inputUsername")}
                        className="w-full border-b border-neutral-100 bg-white py-2 px-0 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                    />
                    <Clerk.FieldError className="block text-sm text-red-400" />
                </Clerk.Field>
                <SignUp.Action
                    submit
                    className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-primary-foreground hover:opacity-90 border-b-4 border-lime-700 h-14 md:h-16 rounded-md px-8 text-xs md:text-base"
                >
                    {t("authPage.otpVerification.button")}
                </SignUp.Action>
                </SignUp.Step>
            </SignUp.Root>
        </div>
    )
}