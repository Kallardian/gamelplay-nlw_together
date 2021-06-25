import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles';

type Props = RectButtonProps & { //recebe todas as propriedades do Touch e todas que eu definir
    title: string;
    // title?: string => quando a props é opcional
}

export function ButtonIcon({ title, ...rest }: Props) { //rest é todo o resto
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg}
                    style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>

        </RectButton>
    )
}
