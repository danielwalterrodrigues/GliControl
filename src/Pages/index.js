import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, Platform, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppRoutes from "./App";

const AuthStack = createNativeStackNavigator()
const AppStack = createNativeStackNavigator()

const Rotas = () => {
    
    return(
        <AppRoutes />
    )
        
}

const styles = StyleSheet.create({
    bg: {
        width: 1366,
        height: 789,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#ffb900'
      }
})
export default Rotas


