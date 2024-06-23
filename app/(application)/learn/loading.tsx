"use client"

import { LoaderIcon } from "lucide-react"

const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <LoaderIcon className="w-6 h-6 text-lime-500 animate-spin" />
        </div>
    )
}

export default Loading