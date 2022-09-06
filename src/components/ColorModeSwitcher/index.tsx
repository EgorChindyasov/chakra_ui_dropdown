import React, {FC, useEffect} from 'react'
import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
    ColorMode
} from '@chakra-ui/react'
import {FaMoon, FaSun} from 'react-icons/fa'

import styles from './index.module.css'

type ColorModeSwitcherProps = {
    setColorMode?: (param: ColorMode) => void,
} & Omit<IconButtonProps, "aria-label">

const ColorModeSwitcher: FC<ColorModeSwitcherProps> = (props) => {

    const {setColorMode, ...otherProps} = props

    const {colorMode, toggleColorMode} = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    useEffect(() => {
        if (colorMode && setColorMode) {
            setColorMode(colorMode)
        } 
    }, [colorMode, setColorMode])

    return <div className={styles.block}>
        <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
            {...otherProps}
        />
    </div> 
}

export default ColorModeSwitcher