"use client"
import { MobileSidebar } from "@/app/_components/common/application/mobile-sidebar"

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden fixed top-0 left-0 px-6 w-full h-[60px] flex items-center border-b bg-lime-600 z-50">
            <MobileSidebar />
        </nav>
    )
}