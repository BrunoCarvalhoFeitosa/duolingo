"use client"
import * as Flags from "country-flag-icons/react/3x2"

interface FlagIconProps {
    country: string
}

const FlagIcon: React.FC<FlagIconProps> = ({ country }) => {
    // @ts-ignore
    const Flag = Flags[country] as string ?? any

    return (
        <Flag />
    )
}

export default FlagIcon