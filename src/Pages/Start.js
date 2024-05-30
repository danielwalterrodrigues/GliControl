import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import CustomText from '../Utilities/CustomText'
import UploadPhoto from '../Utilities/UploadPhoto'
import { estilos } from '../Utilities/Estilos'
import { windowHeight } from '../Utilities/Dimensions'
import UserProfile from '../Contexts/UserContext';


const Start = () => {
    const [ name, setName] = useState()
    const [userData, setUserData] = useContext(UserProfile)
    const [showLogin, setShowLogin] = useState(false)
    const navigation = useNavigation()

    function Login() {
        setUserData({...userData, name: name})
        navigation.navigate('Dashboard')
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
                
                <TouchableOpacity style={showLogin ? estilos.botao : estilos.botaoOff} onPress={() => {Login()}}>
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