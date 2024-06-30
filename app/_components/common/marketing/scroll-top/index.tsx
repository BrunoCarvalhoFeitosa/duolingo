"use client"
import { useScroll } from "@/app/_hooks/use-scroll"
import { MoveUpIcon } from "lucide-react"

export const ScrollTop = () => {
    const scrolled = useScroll()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="fixed bottom-[68px] right-4 md:bottom-16 xl:bottom-[98px] md:right-10 z-[99]">
            <button
                onClick={scrollToTop}
                className={`${scrolled ? "flex" : "hidden"} flex-col gap-y-1 justify-center items-center w-14 h-14 xl:w-16 xl:h-16 border border-b-4 border-lime-700 rounded-sm bg-lime-600 outline-none cursor-pointer`}
            >
                <MoveUpIcon />
            </button>
        </div>
    )
}