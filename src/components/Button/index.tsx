import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
    Text,

} from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & { //recebe todas as propriedades do Touch e todas que eu definir
    title: string;
    // title?: string => quando a props é opcional
}

export function Button({ title, ...rest }: Props) { //rest é todo o resto
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>

        </RectButton>
    )
}
