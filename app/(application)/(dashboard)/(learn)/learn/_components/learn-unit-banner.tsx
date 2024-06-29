"use client"
import Link from "next/link"
import { Button } from "@/app/_components/ui/button"
import { NotebookTextIcon } from "lucide-react"

interface LearnUnitBannerProps {
    title: string
    description: string
}

export const LearnUnitBanner = ({ title, description }: LearnUnitBannerProps) => {
    return (
        <div className="p-5 flex items-center justify-between w-full rounded-lg bg-lime-600">
            <div className="space-y-2.5 text-white">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
                <p className="mt-0 text-base md:text-lg">
                    {description}
                </p>
            </div>
            <div>
                <Link href="/lesson">
                    <Button
                        type="button"
                        variant="secondary"
                        size="lg"
                        className="hidden md:flex"
                    >
                        <NotebookTextIcon className="mr-2" />
                        <span>Continuar</span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}