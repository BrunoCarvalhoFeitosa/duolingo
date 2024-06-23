"use client"
import Link from "next/link"
import { Button } from "@/app/_components/ui/button"
import { ArrowLeftIcon } from "lucide-react"

interface HeaderProps {
    title: string
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <div className="mb-5 sticky top-0 bg-white border-b text-neutral-400 lg:z-50">
            <div className="flex justify-between items-center w-[55%]">
                <div className="hover:bg-gray-200">
                    <Link href="/courses">
                        <Button variant="ghost" size="sm">
                            <ArrowLeftIcon className="w-5 h-5 stroke-2 text-neutral-400" />
                        </Button>
                    </Link>
                </div>
                <div>
                    <h1 className="text-lg font-bold">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}