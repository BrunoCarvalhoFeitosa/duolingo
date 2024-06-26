"use client"
import { MobileHeader } from "@/app/_components/common/application/mobile-header"
import { Sidebar } from "@/app/_components/common/application/sidebar"

const ApplicationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="pt-[50px] lg:pt-0 lg:pl-[310px] h-full">
                <div className="pt-10 mx-auto max-w-[1056px] lg:max-w-[915px] 2xl:max-w-[1180px] 4xl:max-w-[1460px] h-full">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default ApplicationLayout