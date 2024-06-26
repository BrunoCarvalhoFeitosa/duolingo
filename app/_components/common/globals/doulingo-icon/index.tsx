"use client"
import Link from "next/link"
import { DuolingoLogoImageSvg } from "@/public/svgs/duolingo-logo-image-svg"

interface DuolingoIconProps {
    href: string
}

export const DuolingoIcon = ({ href }: DuolingoIconProps) => {
    return (
        <Link href={`${href}`} className="w-fit">
            <DuolingoLogoImageSvg
                width="140"
                height="30"
                fill="#020817"
            />
        </Link>
    )
}