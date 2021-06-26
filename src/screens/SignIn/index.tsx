import React, { useState } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";
import { Brackground } from "../../components/Background";
import { styles } from './styles'



export function SignIn() {
  // const [text, setText] = useState('') propriedade do useState importado [estado, funçãoQueAtualizaOEstado]

  const navigation = useNavigation();


  function handleSignIn() {
    navigation.navigate('Home')
  }
  return (
    <Brackground>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`} {/* isso serve para quebrar a linha */}
            jogatinas {`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>

      </View>
    </Brackground>
  )
}