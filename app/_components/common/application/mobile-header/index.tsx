"use client"
import { MobileSidebar } from "@/app/_components/common/application/mobile-sidebar"
import { DuolingoIcon } from "@/app/_components/common/globals/doulingo-icon"

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden fixed top-0 left-0 px-6 w-full h-[60px] flex justify-between items-center border-b bg-lime-600 z-50">
            <DuolingoIcon fill="#FFFFFF" href="/learn" />
            <MobileSidebar />
        </nav>
    )
}