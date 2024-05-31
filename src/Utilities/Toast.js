import React, {useState, useContext, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native"
import SystemProfile from "../Contexts/SystemContext"
import { windowWidth, windowHeight } from './Dimensions'
import { estilos } from './Estilos'
import Animated, {SlideInUp, SlideOutUp} from 'react-native-reanimated'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const ToastAll = () => {
    const [systemData, setSystemData] = useContext(SystemProfile)
    const [showErro, setShowErro] = useState(false)
    const erro = systemData?.erro
    const erroType = systemData?.erroType
    const msg = systemData?.erroMsg

    console.log('Erromsg: '+erro)

    useEffect(()=>{
        if(erro != '' && erro != null && erro != undefined){
            Toast.show({
                type: erroType ===  'success' ? ALERT_TYPE.SUCCESS : erroType === 'warning' ? ALERT_TYPE.WARNING : ALERT_TYPE.DANGER,
                title: erro,
                autoClose: 3000,
                textBody: msg,
            })
        setSystemData({...systemData, erro: ''})
        }
    }, [erro])

    return(<></>)
}

export default ToastAll