import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Brackground } from "../../components/Background";
import { Header } from "../../components/Header";

export function AppointmentDetails(){
    return(
        <Brackground>
            <Header 
                title="Detalhes"
            />

        </Brackground>
    )
}