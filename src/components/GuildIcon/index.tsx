import React from "react";
import { Image } from "react-native";

import { styles } from './styles'

export function GuildIcon() {

    const uri = 'https://img.pngio.com/discord-squircle-icon-discord-png-512_512.png'
    return (
        <Image style={styles.image}
            source={{ uri }}
            resizeMode="cover"
        />
    )
}