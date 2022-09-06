import React, {useState} from 'react'
import {
    ChakraProvider, 
    ColorMode, 
    ImageProps, 
    theme
} from '@chakra-ui/react'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Dropdown from './ui/Dropdown'
import {DropdownOptions} from './ui/Dropdown/type'

const IMAGE_PROPS: ImageProps = {
    boxSize: '1.5rem',
    borderRadius: 'full',
    mr: '12px',
    borderWidth: '2px',
    borderStyle: 'solid',
}

export const App = () => {
    const [colorMode, setColorMode] = useState<ColorMode>()

    const dropdownOptions: DropdownOptions[] = [
        {
            title: 'All colors',
            imageProps: {
                borderColor: colorMode === 'light' ? 'black' : 'light',
                ...IMAGE_PROPS
            }
        },
        {
            title: 'Green',
            imageProps: {
                background: 'green',
                borderColor: 'green',
                ...IMAGE_PROPS
            }
        },
        {
            title: 'Red',
            imageProps: {
                background: 'red',
                borderColor: 'red',
                ...IMAGE_PROPS
            }
        },
    ]

    return <ChakraProvider 
        theme={theme}
    >
        <ColorModeSwitcher 
            setColorMode={setColorMode}
            justifySelf="flex-end" 
        />
        <Dropdown 
            options={dropdownOptions}
            settings={{w: '250px'}} 
            title='Colors'
            labelTitle='Color'
        />
    </ChakraProvider>
}