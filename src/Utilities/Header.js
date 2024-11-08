import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { windowHeight, windowWidth } from './Dimensions'
import UploadPhoto from './UploadPhoto'
import CustomText from './CustomText'
import UserProfile from '../Contexts/UserContext'
import AutoHeightImage from 'react-native-auto-height-image'
import Animated, {FadeIn, FadeOut, SlideInLeft, SlideOutLeft} from 'react-native-reanimated'
import { MMKV } from 'react-native-mmkv'

import hamburger from '../assets/hamburger.png'
import back from '../assets/back.png'
import switchPt from '../assets/icoSwitchPt.png'
import switchEn from '../assets/icoSwitchEn.png'

import { ptBr, enUs } from '../Utilities/Locale';
import { estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native'
import LocaleProfile from '../Contexts/LocaleContext'

const storage = new MMKV()

const Header = () => {
    const [userData, setUserData] = useContext(UserProfile)
    const [showMenu, setShowMenu] = useState(false)
    const [locale, setLocale] = useContext(LocaleProfile)
    const navigation = useNavigation()
    const [dev, setDev] = useState(false)
    const [switchLocale, setSwitchLocale] = useState()

    useEffect(()=>{
      if (__DEV__) {
          setDev(true)
      }
    }, [])

    function CleanData() {
      setUserData([])
      setShowMenu(false)
      storage.delete('@GliControl')
      navigation.navigate('Home')
    }

 
    function DefineLocale(value) {
      setLocale(value === 'enUs' ? enUs : ptBr)
      setSwitchLocale(value === 'enUs' ? switchEn : switchPt)
      setUserData({...userData, locale: value})
    }


  return (
    <View style={styles.header}>
      <View>
        <UploadPhoto />
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={()=>{setShowMenu(!showMenu)}} style={{paddingLeft: 30, paddingRight: 5, paddingTop: 20}} >
          <AutoHeightImage source={hamburger} width={20} />
        </TouchableOpacity>
        <CustomText style={{color: '#ffffff', textAlign: 'right', marginTop: 10, width: 180}}>
            {locale.ola},{'\n'}{userData.name}
        </CustomText>
      </View>
      {showMenu ?
        <Animated.View entering={SlideInLeft} exiting={SlideOutLeft} style={styles.barraLateral}>
          <TouchableOpacity onPress={()=>{setShowMenu(false)}} style={{alignItems: 'flex-end', paddingLeft: 30, paddingBottom: 20}}>
            <AutoHeightImage source={back} width={30} />
          </TouchableOpacity>
          <UploadPhoto />
          <CustomText style={{textAlign: 'center', color: '#ffffff'}}>{userData.name}</CustomText>
          <View style={{marginTop: 50}}>
            <TouchableOpacity accessible={true} accessibilityLabel='Home' style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('Dashboard')}}>
              <CustomText style={{color: '#ffffff'}}>{locale.principal}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} accessibilityLabel='Criar momentos diários' style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('CreateMoments')}}>
              <CustomText style={{color: '#ffffff'}}>{locale.momentosDiarios}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} accessibilityLabel='Novo registro' style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('Register')}}>
              <CustomText style={{color: '#ffffff'}}>{locale.novoRegistro}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} accessibilityLabel='Todos os registros' style={[estilos.botao, styles.botao]} onPress={()=>{setShowMenu(false), navigation.navigate('AllRegistries')}}>
              <CustomText style={{color: '#ffffff'}}>{locale.todosRegistros}</CustomText>
            </TouchableOpacity>
            {dev ?
            <View style={{marginTop: 40}}>
              <TouchableOpacity style={[estilos.botaoOff, styles.botao]} onPress={()=>{CleanData()}}>
                <CustomText style={{color: '#ffffff85'}}>Limpar dados</CustomText>
              </TouchableOpacity>
            </View>
            : null }
             <View style={{flexDirection: 'row', width: windowWidth, alignItems: 'center', marginTop: 40}}>  
              <TouchableOpacity onPress={()=>{DefineLocale('enUs')}} style={{width: 80, alignItems: 'flex-end'}}><CustomText style={{color: '#ffffff'}}>English </CustomText></TouchableOpacity>
              <AutoHeightImage source={userData?.locale === 'ptBr' ? switchPt : switchEn} width={40} style={{marginHorizontal: 20}} />
              <TouchableOpacity onPress={()=>{DefineLocale('ptBr')}} style={{width: 100}}><CustomText style={{color: '#ffffff'}}> Português</CustomText></TouchableOpacity>
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
      width: windowWidth-70,
      height: windowHeight,
      left: -20,
      top: 0,
      borderRightWidth: 6,
      borderRightColor: '#e50e00',
      padding: 30
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