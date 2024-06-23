"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet"
import { Sidebar } from "@/app/_components/common/application/sidebar"
import { MenuIcon } from "lucide-react"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}