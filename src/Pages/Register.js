import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Header from '../Utilities/Header'
import CustomText from '../Utilities/CustomText'
import React, { useContext, useState, useEffect } from 'react'
import { estilos } from '../Utilities/Estilos'
import UserProfile from '../Contexts/UserContext'
import SystemProfile from '../Contexts/SystemContext'
import { windowWidth } from '../Utilities/Dimensions'
import Slider from '@react-native-community/slider'

import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const navigation = useNavigation()
    const [userData, setUserData] = useContext(UserProfile)
    const [systemData, setSystemData] = useContext(SystemProfile)
    const [mgdL, setMgdL] = useState(90)
    const [moments, setMoments] = useState(userData?.moments ? userData.moments : [])
    const [register, setRegister] = useState(userData?.register ? userData.register : [])
    const [selected, setSelected] = useState('')
    const [save, setSave] = useState(false)


    const [momentSelected, setMomentsSelected] = useState(moments?.selected ? moments.selected : [])
    
    useEffect(()=>{
        if(userData.moments === undefined) {
            setMoments(current => [...current, {moment: 'Registro Livre'}])
        } else {
            setMoments(userData.moments)
        }
    }, [])

    useEffect(()=>{
        setUserData({...userData, moments: moments})
    }, [moments])

    function SaveRegister() {
        setRegister(current => [...current, {date: new Date(), moment: selected, value: mgdL}])
    }

    useEffect(()=>{
        if(save){
            setUserData({...userData, register: register})
            setSystemData({...systemData, erro: 'Medição registrada com sucesso!', erroType: 'success', erroMsg: null})
            navigation.navigate('Dashboard')
        }
    }, [save])

  return (
    <View style={estilos.container}>
        <Header />
        <CustomText style={[estilos.title, {fontSize: 25}]}>REGISTRO DE GLICEMIA</CustomText>
        <CustomText style={[estilos.texto, {marginTop: 30}]}>
            Escolha um momento para este registro.
        </CustomText>
        <CustomText style={[estilos.texto, {marginBottom: 20}]}>
            Caso não selecione nenhuma, sua medição será salva como "Registro Livre".
        </CustomText>
        {selected === '' ?
        <View style={styles.box}>
            {moments.map((moment, index)=>(
                <TouchableOpacity key={index} style={[styles.item, {backgroundColor: index === 0 ? '#ee6e18' : '#9a0a00'}]} onPress={()=>{setSelected(moment.moment)}}>
                    <CustomText style={{fontSize: 14, color: '#ffffff'}}>
                        {moment.moment}
                    </CustomText>
                </TouchableOpacity>
            ))}
        </View>

        : 

        <>
        <CustomText style={{textAlign: 'center'}}>Momento selecionado:{'\n'}<Text style={{color: '#cc0000', fontSize: 20}}>{selected}</Text></CustomText>
        <CustomText style={{fontSize: 50, color: '#6d0000', marginVertical: 30}}>{mgdL}</CustomText>
        
        
        <Slider
  style={{width: 300}}
  minimumValue={80}
  maximumValue={280}
  value={mgdL}
  step={1}
  thumbTintColor={'#000000'}
  minimumTrackTintColor="#cc0000"
  maximumTrackTintColor="#700100"
  onValueChange={newMgdL => setMgdL(newMgdL)}
/>

        <TouchableOpacity style={[estilos.botao, {marginTop: 80}]} onPress={()=>{SaveRegister(), setSave(true)}}>
            <CustomText style={{color: '#ffffff'}}>salvar registro</CustomText>
        </TouchableOpacity>
        </>
        }
        
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
     box: {
        width: windowWidth-60,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#9a0a00',
        borderRadius: 8,
        paddingHorizontal: 25,
        paddingTop: 9,
        paddingBottom: 12,
        marginRight: 12,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})