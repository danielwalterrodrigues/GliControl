import React from "react";
import { Platform, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "./Dimensions";

export const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: windowWidth,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    input: {
        borderWidth: 2,
        color: '#000000',
        borderColor: '#cc0101',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        marginVertical: 5,
        width: windowWidth-80,
        fontFamily: 'Quicksand_400Regular'
    },
    botao: {
        borderWidth: 2,
        borderColor: '#cc0101',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#7c0000',
        marginVertical: 5,
        width: windowWidth-80,
        fontFamily: 'Quicksand_600SemiBold',
        alignItems: 'center'
    },
    botaoOff: {
        borderWidth: 2,
        borderColor: '#cc010133',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f97500A633',
        marginVertical: 5,
        fontFamily: 'Quicksand_600SemiBold',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        width: 250,
        marginTop: 30
    },
    texto: {
        fontSize: 14,
        color: '#7f7e7e',
        alignItems: 'flex-start',
        width: 350

    }
})