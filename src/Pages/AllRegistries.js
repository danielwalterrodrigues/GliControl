import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Utilities/Header'
import CustomText from '../Utilities/CustomText'
import React, { useContext, useState, useEffect } from 'react'
import { estilos } from '../Utilities/Estilos'
import UserProfile from '../Contexts/UserContext'
import SystemProfile from '../Contexts/SystemContext'
import { windowWidth } from '../Utilities/Dimensions'
import { useNavigation } from '@react-navigation/native'
import LocaleProfile from '../Contexts/LocaleContext'
import moment from 'moment'

const AllRegistries = () => {
    const navigation = useNavigation()
    const [userData, setUserData] = useContext(UserProfile)
    const [systemData, setSystemData] = useContext(SystemProfile)
    const [locale, setLocale] = useContext(LocaleProfile)
    const registries = userData?.register
    const [border, setBorder] = useState()

  return (
    
    <View style={estilos.container}>
        
        <View style={{zIndex: 999}}>
            <Header />
        </View>
        <CustomText style={estilos.title}>{locale.todosRegistros}</CustomText>
        <View style={{marginVertical: 20, alignItems: 'flex-start'}}></View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <CustomText style={[styles.item, {borderTopWidth: 0, width: 35}]}></CustomText>
                    <CustomText style={[styles.item, {borderTopWidth: 0, width: 130}]}>{locale.dataehora}</CustomText>
                    <CustomText style={[styles.item, {width: 135, borderTopWidth:0}]}>{locale.momento}</CustomText>
                    <CustomText style={[styles.item, {borderTopWidth:0}]}>mg/dL</CustomText>
                </View>
        {registries ?
            registries.reverse().map((reg, index)=>(
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} key={index}>
                    <CustomText style={[styles.item, {borderTopWidth: index === 0 ? 0 : 1}]}>{index+1}</CustomText>
                    <CustomText style={[styles.item, {borderTopWidth: index === 0 ? 0 : 1}]}>{moment(reg.date).format('DD/MM/YY - HH:mm')}</CustomText>
                    <CustomText style={[styles.item, {width: 150, borderTopWidth: index === 0 ? 0 : 1}]}>{reg.moment}</CustomText>
                    <CustomText style={[styles.item, {borderTopWidth: index === 0 ? 0 : 1}]}>{reg.value}</CustomText>
                </View>
            ))
        :
            <View style={styles.box}>
                <CustomText>
                    {locale.nenhumRegistro}
                </CustomText>
            </View>
        }
    </View>
  )
}

export default AllRegistries

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#ca615530',
        padding: 14,
        borderRadius:12,
        width: windowWidth-40,
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight: 3,
        marginBottom: 5,
        flexDirection: 'row',
        fontSize: 14,
        borderTopColor: '#44444430',
        borderTopWidth: 1 
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