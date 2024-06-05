import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import CustomText from '../Utilities/CustomText'
import UploadPhoto from '../Utilities/UploadPhoto'
import { estilos } from '../Utilities/Estilos'
import { windowHeight, windowWidth } from '../Utilities/Dimensions'
import UserProfile from '../Contexts/UserContext';
import Animated, { FlipOutXUp, SlideOutUp } from 'react-native-reanimated';
import Erro from '../Utilities/Erro';
import SystemProfile from '../Contexts/SystemContext';
import LocaleProfile from '../Contexts/LocaleContext';

import switchPt from '../assets/icoSwitchPt.png'
import switchEn from '../assets/icoSwitchEn.png'

import { ptBr, enUs } from '../Utilities/Locale';
import AutoHeightImage from 'react-native-auto-height-image';


const Start = () => {
    const [ name, setName] = useState()
    const [userData, setUserData] = useContext(UserProfile)
    const [systemData, setSystemData] = useContext(SystemProfile)
    const [locale, setLocale] = useContext(LocaleProfile)
    const [showLogin, setShowLogin] = useState(false)
    const navigation = useNavigation()
    const [switchLocale, setSwitchLocale] = useState()


    function DefineLocale(value) {
        console.log('value: '+value)
        setLocale(value === 'enUs' ? enUs : ptBr)
        setSwitchLocale(locale === 'enUs' ? switchEn : switchPt)
        setUserData({...userData, locale: value})
    }

    useEffect(()=>{
        setName(userData?.name ? userData.name : '')
    }, [])
      
    function Login() {
        if(name){
        setUserData({...userData, name: name})
        navigation.navigate('Dashboard')
        setSystemData({...systemData, erro: locale.bemvindo, erroType: 'success', erroBox: 'dialog', erroMsg: locale.bemVindo})
        } else {
            setSystemData({...systemData, erro: locale.aviso, erroType: 'danger', erroMsg: locale.erroNome})
        }
    }

  return (
    
<KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
    <View style={{"backgroundColor": "#700700", height: windowHeight}}>
    <ScrollView style={{flexGrow: 1, paddingBottom: 20}}>
        <View style={[estilos.container]}>
            <View style={{marginTop: 80, alignItems: 'center'}}>
            <Image source={logo} style={{width:220, height: 52}} />
            </View>
            <CustomText style={{textAlign: 'center', marginVertical: 20}}>
                
            </CustomText>
            <View>
                <UploadPhoto />
                <CustomText style={{textAlign: 'center', fontSize: 12, color: '#ffffff'}}>
                    {locale.insiraFoto}
                </CustomText>
            </View>
            
                <View style={{marginTop: 50}}>
                
                <TextInput
                    color={'#000000'}
                    fontSize={15}
                    value={name}
                    onChangeText={newName => setName(newName)}
                    onEndEditing={() => setShowLogin(true)}
                    style={estilos.input}
                    placeholder={locale.digiteNome}
                    placeholderTextColor="#000000"
                    />
                
                <TouchableOpacity style={[estilos.botao, {marginTop: 20}]} onPress={() => {Login()}}>
                    <CustomText style={{fontSize: 18, color: '#ffffff'}}>{locale.entrar}</CustomText>
                </TouchableOpacity>
            </View>  
        </View>
        <View style={{flexDirection: 'row', width: windowWidth, alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
            
            <TouchableOpacity onPress={()=>{DefineLocale('enUs')}} style={{width: (windowWidth/3), alignItems: 'flex-end'}}><CustomText style={{color: '#ffffff'}}>English </CustomText></TouchableOpacity>
            <AutoHeightImage source={userData.locale === 'ptBr' ? switchPt : switchEn} width={40} style={{marginHorizontal: 20}} />
            <TouchableOpacity onPress={()=>{DefineLocale('ptBr')}} style={{width: (windowWidth/3)}}><CustomText style={{color: '#ffffff'}}> Português</CustomText></TouchableOpacity>
        </View>
    </ScrollView>
    </View>
</KeyboardAvoidingView>
  
  )
}

export default Start

const styles = StyleSheet.create({
    input: {

    }
})