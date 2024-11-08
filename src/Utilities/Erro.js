import React, {useState, useContext, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native"
import SystemProfile from "../Contexts/SystemContext"
import { windowWidth, windowHeight } from './Dimensions'
import { estilos } from './Estilos'
import Animated, {SlideInUp, SlideOutUp} from 'react-native-reanimated'
import LocaleProfile from '../Contexts/LocaleContext'

const Erro = () => {
    const [systemData, setSystemData] = useContext(SystemProfile)
    const [showErro, setShowErro] = useState(false)
    const [locale, setLocale] = useContext(LocaleProfile)
    const erro = systemData?.erro
    const erroType = systemData?.type

    useEffect(()=>{
        if(erro != '') {
            setShowErro(true)
        }
       setTimeout(() => {setShowErro(false), setSystemData({...systemData, erro: '', type: ''})}, 3000)
    }, [erro])

    return(
        <View>
        {showErro ? 
            <Animated.View entering={SlideInUp} exiting={SlideOutUp} style={[styles.container, {backgroundColor:
                (() => {
                    switch (erroType) {
                      case 'error': return '#810000D9'
                      case 'warning': return '#ffb900D9'
                      case 'display': return '#008432D9'
                      case 'success': return '#15803dD9'
                      default:
                        return 'transparent'
                    }
                })()
            }]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={[estilos.textoBold, {color: '#ffffff'}]}>{erro}</Text>
                </View>
            </Animated.View>
        : null}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position:'absolute',
        zIndex: 999999999999,
        top: 40,
        left: 30,
        width: Platform.OS === 'web' ? windowWidth-400 : windowWidth-60,
        padding: 30,
        borderRadius: 12
    }
})

export default Erro