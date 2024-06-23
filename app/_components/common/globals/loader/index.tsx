"use client"
import { Loader2Icon } from "lucide-react"

export const Loader = () => {
    return (
        <div className="w-full h-[100dvh] flex justify-center items-center">
            <Loader2Icon size={28} className="animate-spin text-green-500" />
        </div>
    )
}