"use client"
import Image from "next/image"

interface FeedHeaderProps {
    imageSrc: string
    imageWidth: number
    imageHeight: number
    imageAlt: string
    title: string
    description: string
}

export const FeedHeader = ({
    imageSrc,
    imageWidth,
    imageHeight,
    imageAlt,
    title,
    description
}: FeedHeaderProps) => {
    return (
        <div className="pb-4 mx-auto w-full lg:w-[80%] flex flex-col items-center border-b">
            <div>
                <Image
                    src={imageSrc}
                    width={imageWidth}
                    height={imageHeight}
                    alt={imageAlt}
                />
            </div>
            <h1 className="text-2xl font-bold text-center">
                {title}
            </h1>
            <p className="text-base lg:text-lg text-center text-muted-foreground">
                {description}
            </p>
        </div>
    )
}