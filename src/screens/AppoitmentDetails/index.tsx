import React from "react";
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import BannerImg from '../../assets/banner.png'
import { Brackground } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";

import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Paulo',
            avatar_url: 'https://github.com/kallardian.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rreisluiz.png',
            status: 'online'
        },
        {
            id: '3',
            username: 'Luis',
            avatar_url: 'https://github.com/luisfelipeluis49.png',
            status: 'offline'
        },
    ]

    return (
        <Brackground>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}

            />
            <View style={styles.buttonView}>
                <ButtonIcon
                    title="Entrar na Partida"
                />
            </View>

        </Brackground>
    )
}