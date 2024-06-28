"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/app/_components/ui/button"

interface SidebarItemProps {
    label: string
    iconSrc: string
    href: string
}

export const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {
    const pathname = usePathname()
    const active = pathname === href

    return (
        <Link href={href}>
            <Button
                type="button"
                size="lg"
                variant={active ? "default" : "ghost"}
                className="w-full h-14 justify-start gap-2"
            >
                <div>
                    <Image
                        src={iconSrc}
                        alt={label}
                        width={36}
                        height={36}
                    />
                </div>
                <div className="font-semibold uppercase">
                    {label}
                </div>
            </Button>
        </Link>
    )
}