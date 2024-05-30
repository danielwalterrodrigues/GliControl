import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { windowWidth } from './Dimensions'
import UploadPhoto from './UploadPhoto'
import CustomText from './CustomText'
import UserProfile from '../Contexts/UserContext'

const Header = () => {
    const [userData, setUserData] = useContext(UserProfile)

  return (
    <View style={styles.header}>
      <View>
        <UploadPhoto />
      </View>
      <View>
        <CustomText style={{color: '#ffffff', textAlign: 'right'}}>
            Olá,{'\n'}{userData.name}
        </CustomText>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: windowWidth-40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})