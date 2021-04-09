import React from 'react'
import { Text } from 'react-native'
import { TextLogo } from './styles'

import { useFonts, Raleway_900Black } from '@expo-google-fonts/raleway'

export default function Logo() {
    let [fontsLoader] = useFonts({
        Raleway_900Black
      })

    return (
        <>
            <TextLogo>PrintSafe</TextLogo>
        </>
    )
}