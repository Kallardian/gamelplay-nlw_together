import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image,
  StatusBar
} from "react-native";

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from './styles'

export function SignIn(){
    // const [text, setText] = useState('') propriedade do useState importado [estado, funçãoQueAtualizaOEstado]


  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" //pra ficar claro a barra de status
        backgroundColor="transparent" //para deixar ela transparente
        translucent //para deixar o conteúdo bater até o topo da tela
      />
      <Image 
      source={IllustrationImg} 
      style={styles.image}
      resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se e {`\n`}
          organize {`\n`} {/* isso serve para quebrar a linha */ }
          suas jogatinas {`\n`}
          facilmente {`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7} 
        />
      </View>

    </View>
  )
}