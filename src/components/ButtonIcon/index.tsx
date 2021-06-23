import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles';

type Props = TouchableOpacityProps & { //recebe todas as propriedades do Touch e todas que eu definir
    title: string;
    // title?: string => quando a props é opcional
}

export function ButtonIcon({ title } : Props){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <View style ={styles.iconWrapper}>
                <Image 
                source={DiscordImg}
                style={styles.icon} /> 
            </View>
            <Text style={styles.title}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}