import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { windowHeight, windowWidth } from './Dimensions'
import UploadPhoto from './UploadPhoto'
import CustomText from './CustomText'
import UserProfile from '../Contexts/UserContext'
import AutoHeightImage from 'react-native-auto-height-image'
import Animated, {FadeIn, FadeOut, SlideInLeft, SlideOutLeft} from 'react-native-reanimated'

import hamburger from '../assets/hamburger.png'
import back from '../assets/back.png'
import { estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native'


const Header = () => {
    const [userData, setUserData] = useContext(UserProfile)
    const [showMenu, setShowMenu] = useState(false)
    const navigation = useNavigation()

    function CleanData() {
      setUserData([])
      setShowMenu(false)
      navigation.navigate('Home')
    }

  return (
    <View style={styles.header}>
      <View>
        <UploadPhoto />
      </View>
      <View style={{alignItems: 'flex-end', marginTop: 20}}>
        <TouchableOpacity onPress={()=>{setShowMenu(!showMenu)}}>
          <AutoHeightImage source={hamburger} width={20} />
        </TouchableOpacity>
        <CustomText style={{color: '#ffffff', textAlign: 'right', marginTop: 10, width: 180}}>
            Olá,{'\n'}{userData.name}
        </CustomText>
      </View>
      {showMenu ?
        <Animated.View entering={SlideInLeft} exiting={SlideOutLeft} style={styles.barraLateral}>
          <TouchableOpacity onPress={()=>{setShowMenu(false)}} style={{alignItems: 'flex-end'}}>
            <AutoHeightImage source={back} width={30} />
          </TouchableOpacity>
          <UploadPhoto />
          <CustomText style={{textAlign: 'center', color: '#ffffff'}}>{userData.name}</CustomText>
          <View style={{marginTop: 50}}>
            <TouchableOpacity style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('Dashboard')}}>
              <CustomText style={{color: '#ffffff'}}>Principal</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('CreateMoments')}}>
              <CustomText style={{color: '#ffffff'}}>Definir momentos diários</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('Register')}}>
              <CustomText style={{color: '#ffffff'}}>Criar um novo registro</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('AllRegistries')}}>
              <CustomText style={{color: '#ffffff'}}>Todos os registros</CustomText>
            </TouchableOpacity>
            <View style={{marginTop: 40}}>
              <TouchableOpacity style={[estilos.botaoOff, styles.botao]} onPress={()=>{CleanData()}}>
                <CustomText style={{color: '#ffffff85'}}>Limpar dados</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>  
      : null}
      {showMenu ?
        <Animated.View style={styles.barraBgLateral} entering={FadeIn} exiting={FadeOut}>

        </Animated.View>
      : null}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: windowWidth-40,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    barraLateral: {
      position: 'absolute',
      zIndex: 225,
      backgroundColor: '#700700',
      width: windowWidth-50,
      height: windowHeight,
      left: -20,
      top: 0,
      borderRightWidth: 6,
      borderRightColor: '#e50e00',
      padding: 40
    },
    barraBgLateral: {
      position: 'absolute',
      zIndex: 223,
      backgroundColor: '#000000BF',
      width: windowWidth+20,
      height: windowHeight,
      left: -20,
      top: 0,
      borderRightWidth: 6,
      borderRightColor: '#e50e00',
      padding: 40
    },
    botao: {
      width: 270,
      alignItems: 'flex-start'
    }
})