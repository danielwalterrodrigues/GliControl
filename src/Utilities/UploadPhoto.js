import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomText from './CustomText'
import * as ImagePicker from 'expo-image-picker';
import UserProfile from '../Contexts/UserContext';
import userPhoto from '../assets/user.png'

const UploadPhoto = () => {
    const [userData, setUserData] = useContext(UserProfile)
    const [photo, setPhoto] = useState()
    const [hasImage, setHasImage] = useState()

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
          aspect: [4, 4]
        });
    
        if (!result.canceled) {
          setUserData({...userData, userPhoto: result.assets[0].uri});
          setHasImage(result.canceled === false ? true : false)
        }
      };
    
  return (
    <View style={styles.photo}>
        <TouchableOpacity onPress={pickImage} style={styles.photoBox}>
          {userData.userPhoto? 
            <Image source={{ uri : userData.userPhoto }} style={{width: 140, height: 140, borderRadius: 120}} />
            :
            <Image source={userPhoto} style={{width: 60, height: 60}} />
            }
        </TouchableOpacity>
    </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
  photo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  photoBox: {
    backgroundColor: '#ebebeb',
    borderWidth: 5,
    borderColor: '#cc0101',
    borderRadius: 120,
    width: 146,
    height: 146,
    alignItems: 'center',
    justifyContent: 'center',
  }
})