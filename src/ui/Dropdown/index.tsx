import React, {
    FC, 
    useState,
    forwardRef,
} from 'react'
import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Image
} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'
import {DropdownOptions, DropdownProps} from './type'

import styles from './index.module.css'

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({options, title, labelTitle, settings}, ref) => {
    const [opened, setOpened] = useState(false)
    const [chosenOption, setChosenOption] = useState<DropdownOptions>()

    const expandOptions = () => {
        setOpened(!opened)
    }

    const selectOption = (option: DropdownOptions) => {
        console.log(option)
        setChosenOption(option)
        setOpened(false)
    }

    return <div className={styles.dropdownBlock} ref={ref}>
        <label>{labelTitle}</label>
        <Menu>
            <MenuButton 
                as={Button} 
                rightIcon={opened ? <ChevronUpIcon /> : <ChevronDownIcon />} 
                onClick={expandOptions}
                w='200px'
                {...settings}
                style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }
            >
                <div className={styles.dropdownValue}>
                    <Image
                        {...chosenOption?.imageProps}
                    />
                    <span>{chosenOption?.title ?? title}</span>
                </div>
            </MenuButton>
            <MenuList
                w='200px' 
                {...settings}
            >
                {
                    options.map((option, idx) => {
                        return <MenuItem 
                            key={idx} 
                            onClick={() => selectOption(option)}
                        >
                            <Image
                                {...option.imageProps}
                            />
                            <span>{option.title}</span>
                        </MenuItem>
                    })
                }
            </MenuList>
        </Menu>
    </div>
})

export default Dropdown