import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'

import React, { useState } from 'react'
import logo from '../assets/logo.png'
import CustomText from '../Utilities/CustomText'
import UploadPhoto from '../Utilities/UploadPhoto'
import { estilos } from '../Utilities/Estilos'
import { windowHeight } from '../Utilities/Dimensions'


const Start = () => {
    const [ name, setName] = useState()

  return (
<>
        <View style={{marginTop: 170}}>
        <Image source={logo} style={{width:220, height: 52}} />
        </View>
        <CustomText style={{textAlign: 'center', marginVertical: 30}}>
            Primeiro acesso ao{'\n'}GliControl? Identifique-se!
        </CustomText>
        <View>
            <UploadPhoto />
            <CustomText style={{textAlign: 'center', fontSize: 12}}>
                Insira sua foto
            </CustomText>
        </View>
        
            <View style={{marginTop: 50}}>
            
            <TextInput
                color={'#000000'}
                fontSize={15}
                value={name}
                onChangeText={newName => setName(newName)}
                style={estilos.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#000000"
                />
            
            <TouchableOpacity style={estilos.botao}>
                <CustomText style={{fontSize: 18, color: '#ffffff'}}>entrar</CustomText>
            </TouchableOpacity>
        </View>  
</>
  
  )
}

export default Start

const styles = StyleSheet.create({
    input: {

    }
})