import {ImageProps, MenuButtonProps, MenuListProps} from "@chakra-ui/react"

export type DropdownOptions = {
    title: string,
    imageProps?: ImageProps
}

export type DropdownProps = {
    options: DropdownOptions[]
    settings?: MenuButtonProps & MenuListProps
    title?: string
    labelTitle?: string
}