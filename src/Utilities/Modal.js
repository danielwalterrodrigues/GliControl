import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomText from './CustomText'
import UploadPhoto from './UploadPhoto'
import { windowHeight, windowWidth } from './Dimensions'
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated'
import SystemProfile from '../Contexts/SystemContext'

const Modal = () => {
    const [systemData, setSystemData] = useContext(SystemProfile)

  return (
    systemData?.modal ? 
        <>
        <Animated.View style={styles.bg} entering={FadeIn} exiting={FadeOut}>
            <TouchableOpacity style={{flex: 1}} onPress={()=>{setSystemData({...systemData, modal: false})}}></TouchableOpacity>
        </Animated.View> 
    <Animated.View style={styles.modal2} entering={SlideInDown} exiting={SlideOutDown}></Animated.View>
    <Animated.View style={styles.modal} entering={SlideInDown} exiting={SlideOutDown}>
        <TouchableOpacity style={styles.linhaFecharOut} onPress={()=>{setSystemData({...systemData, modal: false})}}>
            <View style={styles.linhaFechar}></View>
        </TouchableOpacity>
        <UploadPhoto />
    </Animated.View>
    </>
    : null
  )
}

export default Modal

const styles = StyleSheet.create({
    bg: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#000000CC',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 100,
    },
    modal: {
        width: windowWidth,
        height: windowHeight-300,
        backgroundColor: '#000000CC',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 120,
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
        alignItems: 'center'
    },
    modal2: {
        width: windowWidth,
        height: windowHeight-295,
        backgroundColor: '#6d4207CC',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 101,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center'
    },
    linhaFechar: {
        width: 120,
        height: 3,
        backgroundColor: '#2e2017',
    },
    linhaFecharOut: {
        paddingHorizontal: 40,
        paddingVertical: 30
    }
})