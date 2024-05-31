import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import CustomText from '../Utilities/CustomText'
import UploadPhoto from '../Utilities/UploadPhoto'
import { estilos } from '../Utilities/Estilos'
import { windowHeight } from '../Utilities/Dimensions'
import UserProfile from '../Contexts/UserContext';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import Erro from '../Utilities/Erro';
import SystemProfile from '../Contexts/SystemContext';


const Start = () => {
    const [ name, setName] = useState()
    const [userData, setUserData] = useContext(UserProfile)
    const [systemData, setSystemData] = useContext(SystemProfile)
    const [showLogin, setShowLogin] = useState(false)
    const navigation = useNavigation()
      
    function Login() {
        if(name){
        setUserData({...userData, name: name})
        navigation.navigate('Dashboard')
        setSystemData({...systemData, erro: 'Bem vindo(a)', erroType: 'success', erroMsg: 'Aproveite uma nova jornada no controle da sua diabetes.'})
        } else {
            setSystemData({...systemData, erro: 'AVISO!', erroType: 'danger', erroMsg: 'Preencha ao menos o seu nome.'})
        }
    }

  return (
<KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
    <ScrollView style={{flexGrow: 1, paddingBottom: 20}}>
        <View style={estilos.container}>
            <View style={{marginTop: 160, alignItems: 'center'}}>
            <Image source={logo} style={{width:220, height: 52}} />
            </View>
            <CustomText style={{textAlign: 'center', marginVertical: 40}}>
                Primeiro acesso ao{'\n'}GliControl? Identifique-se!
            </CustomText>
            <View>
                <UploadPhoto />
                <CustomText style={{textAlign: 'center', fontSize: 12}}>
                    Insira sua foto
                </CustomText>
            </View>
            
                <View style={{marginTop: 60}}>
                
                <TextInput
                    color={'#000000'}
                    fontSize={15}
                    value={name}
                    onChangeText={newName => setName(newName)}
                    onEndEditing={() => setShowLogin(true)}
                    style={estilos.input}
                    placeholder="Digite seu nome"
                    placeholderTextColor="#000000"
                    />
                
                <TouchableOpacity style={estilos.botao} onPress={() => {Login()}}>
                    <CustomText style={{fontSize: 18, color: '#ffffff'}}>entrar</CustomText>
                </TouchableOpacity>
            </View>  
        </View>
        
    </ScrollView>
</KeyboardAvoidingView>
  
  )
}

export default Start

const styles = StyleSheet.create({
    input: {

    }
})