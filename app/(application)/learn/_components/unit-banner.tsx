"use client"

import { Button } from "@/app/_components/ui/button"
import { NotebookTextIcon } from "lucide-react"
import Link from "next/link"

interface UnitBannerProps {
    title: string
    description: string
}

export const UnitBanner = ({ title, description }: UnitBannerProps) => {
    return (
        <div className="p-5 flex items-center justify-between w-full bg-lime-600">
            <div className="space-y-2.5 text-white">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
                <p className="text-lg">
                    {description}
                </p>
            </div>
            <div>
                <Link href="/lesson">
                    <Button
                        type="button"
                        variant="secondary"
                        size="lg"
                        className="hidden xl:flex"
                    >
                        <NotebookTextIcon className="mr-2" />
                        Continue
                    </Button>
                </Link>
            </div>
        </div>
    )
}