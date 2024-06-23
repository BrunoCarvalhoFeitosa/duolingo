"use client"
import Select from "react-select"
import useCountries from "@/app/_hooks/use-countries"
import FlagIcon from "./flag-icon"

export type CountrySelectValue = {
    flag: string
    label: string
    latlng: number[]
    region: string
    value: string
}

interface CountrySelectProps {
    value?: CountrySelectValue
    onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    const { getAll } = useCountries()
    const defaultValue = getAll().find((country) => country.flag === "BR")
    
    return (
        <Select
            placeholder="Idioma do site"
            isClearable
            options={getAll()}
            value={value ?? defaultValue}
            onChange={(value) => onChange(value as CountrySelectValue)}
            formatOptionLabel={(option: any) => (
                <div className="flex flex-row items-center gap-3">
                    <div className="flex justify-center items-center w-[30px] h-[20px] text-black bg-rose-500 rounded-sm">
                        <FlagIcon country={option.flag} />
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            {option.label},
                        </div>
                        <div className="text-neutral-500">
                            {option.region}
                        </div>
                    </div>
                </div>
            )}
            classNames={{
                control: () => "min-w-[300px] text-base p-3 border-0",
                input: () => "min-w-[300px] 0 text-base cursor-pointer ",
                option: () => "min-w-[300px] text-base",
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    primary: "#84CC16",
                    primary25: "#EEE"
                }
            })}
        />
    )
}

export default CountrySelect