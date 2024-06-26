"use client"

export const StickyWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="hidden lg:block w-[230px] xl:w-[368px] sticky bottom-6 self-end">
            <div className="min-h-[calc(100dvh-48px)] sticky top-6 flex flex-col gap-4">
                {children}
            </div>
        </div>
    )
}