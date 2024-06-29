"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet"
import { Sidebar } from "@/app/_components/common/application/sidebar"
import { AlignRightIcon } from "lucide-react"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <AlignRightIcon className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}