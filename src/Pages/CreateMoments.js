import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Utilities/Header'
import CustomText from '../Utilities/CustomText'
import React, { useContext, useState, useEffect } from 'react'
import { estilos } from '../Utilities/Estilos'
import UserProfile from '../Contexts/UserContext'
import SystemProfile from '../Contexts/SystemContext'
import { windowWidth } from '../Utilities/Dimensions'
import { useNavigation } from '@react-navigation/native'
import novoRegistroIco from '../assets/novoRegistro.png'
import AutoHeightImage from 'react-native-auto-height-image'
import LocaleProfile from '../Contexts/LocaleContext'

const CreateMoments = () => {
    const navigation = useNavigation()
    const [userData, setUserData] = useContext(UserProfile)
    const [systemData, setSystemData] = useContext(SystemProfile)
    const [locale, setLocale] = useContext(LocaleProfile)
    const [moments, setMoments] = useState([])
    const [momentName, setMomentName] = useState()

    function AddMoment() {
        if (momentName != undefined && momentName != null && momentName != ''){
            setMoments(current => [...current, {moment: momentName}])
            setMomentName()
        } else {
            setSystemData({...systemData, erro: locale.aviso, erroMsg: locale.erroMomento, erroType: 'danger'})
        }
    }

    function deletedByIndex(index) {
        setMoments(oldValues => {
            return oldValues.filter((_, i) => i !== index)
          })
        setSystemData({...systemData, erro: locale.aviso, erroType: 'warning', erroMsg: locale.momentoDeletado})
      }

      
    useEffect(()=>{
        setUserData({...userData, moments: moments})
    }, [moments])

    useEffect(()=>{
        if(userData.moments === undefined) {
            setMoments(current => [...current, {moment: locale.registroLivre}])
        } else {
            setMoments(userData.moments)
        }
    }, [])

  return (
    
    <View style={estilos.container}>
        <View style={{zIndex: 999}}>
            <Header />
        </View>
        <CustomText style={estilos.title}>{locale.meusMomentosRegistro}</CustomText>
        <CustomText style={[estilos.texto, {marginVertical: 20
        }]}>{locale.momentosExplica}.</CustomText>
        <TextInput
            color={'#000000'}
            fontSize={15}
            value={momentName}
            onChangeText={newName => setMomentName(newName)}
            //onEndEditing={() => setShowLogin(true)}
            style={estilos.input}
            placeholder={locale.labelCreateMoment}
            placeholderTextColor="#000000"
            />
        <TouchableOpacity style={estilos.botao} onPress={()=>{AddMoment()}}>
            <CustomText style={{color: '#ffffff'}}>{locale.adicionar}</CustomText>
        </TouchableOpacity>
        <View style={styles.box}>
            {moments.map((moment, index)=>(
                <View key={index} style={[styles.item, {backgroundColor: index === 0 ? '#ee6e18' : '#9a0a00'}]}>
                    <CustomText style={{fontSize: 14, color: '#ffffff'}}>
                        {moment.moment}
                    </CustomText>
                    {index === 0 ? null :
                        <TouchableOpacity onPress={()=>{deletedByIndex(index)}} accessible={true} accessibilityLabel={'Delete '+moment.moment}>
                            <CustomText style={{color: '#ffffff'}}> X</CustomText>
                        </TouchableOpacity>
                    }
                </View>
            ))}
        </View>
    
        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}} style={[estilos.botao, styles.novoRegistroBt]}>
            <AutoHeightImage source={novoRegistroIco} width={30} />
            <CustomText style={{color: '#ffffff', fontSize: 20}}>{locale.novoRegistro}</CustomText>
        </TouchableOpacity>
    
    </View>
  )
}

export default CreateMoments

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#ca615530',
        padding: 14,
        borderRadius:12,
        width: windowWidth-80,
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#9a0a00',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingBottom: 4,
        marginRight: 3,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    novoRegistroBt: {
        backgroundColor: '#006808', 
        borderColor: '#005106',
        paddingTop: 15,
        paddingBottom: 20,
        marginTop: 30, 
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})