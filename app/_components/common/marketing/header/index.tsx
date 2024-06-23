"use client"
import { DuolingoIcon } from "@/app/_components/common/globals/doulingo-icon"

export const Header = () => {
    return (
        <header className="relative xl:absolute w-full">
            <div className="py-5 px-5 w-full h-20 flex justify-end">
                <DuolingoIcon href="/" />
            </div>
        </header>
    )
}