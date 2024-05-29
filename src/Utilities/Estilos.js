import React from "react";
import { Platform, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "./Dimensions";

export const estilos = StyleSheet.create({
    input: {
        borderWidth: 2,
        color: '#000000',
        borderColor: '#cc0101',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        marginVertical: 5,
        width: 310,
        fontFamily: 'Quicksand_400Regular'
    },
    botao: {
        borderWidth: 2,
        borderColor: '#cc0101',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#7c0000',
        marginVertical: 5,
        width: 310,
        fontFamily: 'Quicksand_600SemiBold',
        alignItems: 'center'
    },
    botaoOff: {
        borderWidth: 2,
        borderColor: '#f9750033',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f97500A633',
        marginVertical: 5,
        width: 310,
        fontFamily: 'Quicksand_600SemiBold',
        alignItems: 'center'
    }
})