"use client"

export const FeedWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="pb-10 relative top-0 flex-1">
            {children}
        </div>
    )
}