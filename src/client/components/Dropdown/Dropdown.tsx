import { useState } from "react"
import * as React from "react"
import { DropdownItem, SelectBox, Placeholder, Dropdown, Label } from "@/client/components/Dropdown/wrappers"

type Value = string;

export type SelectInputProps<T extends Value> = {
    value: T | null
    placeholder?: string
    onChange: (value: T) => void
    options: T[]
    error?: boolean
    onBlur?: () => void
    className?: string
    onClick?: () => void
}
export const DropDown = <T extends Value = Value>({
    value,
    error,
    placeholder,
    onChange,
    options,
    onClick,
}: SelectInputProps<T>) => {
    const [isOpen, changeOpen] = useState<boolean>(false)
    const dropdownItems = !!options && options.map((item, index) => {
        return (
            <DropdownItem key={index} onClick={() => onChange(item)}>
                {item}
            </DropdownItem>
        )
    })

    return (
        <SelectBox
            isOpen={isOpen}
            placeholder={placeholder}
            error={error}
            onClick={() => {
                onClick && onClick()
                const newValue = !isOpen
                changeOpen(newValue)
            }}
        >
            {value ? <Label>{value}</Label> : <Placeholder>{placeholder}</Placeholder>}
            {isOpen && <Dropdown>{dropdownItems}</Dropdown>}
        </SelectBox>
    )
}
