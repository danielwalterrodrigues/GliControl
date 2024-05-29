import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomText = (props) => {

 

  return (
    <View>
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 17,
        letterSpacing: 0.3,
        color: '#000000'
    }
})