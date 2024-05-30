import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { estilos } from '../Utilities/Estilos'
import CustomText from '../Utilities/CustomText'
import Header from '../Utilities/Header'

const Dashboard = () => {
  return (
    <View style={estilos.container}>
        <Header />
      <CustomText>Dashboard</CustomText>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})