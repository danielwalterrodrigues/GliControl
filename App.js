import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import bg from './src/assets/bg.png'
import UserProfile from './src/Contexts/UserContext';
import SystemProfile from './src/Contexts/SystemContext';
import Erro from './src/Utilities/Erro';
import { windowHeight, windowWidth } from './src/Utilities/Dimensions';
import CustomText from './src/Utilities/CustomText';
import Start from './src/Pages/Start';
import Modal from './src/Utilities/Modal';


export default function App() {
  const [userData, setUserData] = useState([])
  const [systemData, setSystemData] = useState([])

  let [fontsLoaded] = useFonts({
    Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold
  });

  return (
    <SystemProfile.Provider value={[systemData, setSystemData]}>
      <UserProfile.Provider value={[userData, setUserData]}>
        <View style={styles.container}>
          <ImageBackground source={bg} resizeMode='stretch' style={{height: 230, width: windowWidth}}>
            <View style={styles.content}>
                <Start />
            </View>
            <StatusBar style="auto" />
          </ImageBackground>
          <Erro />
          <Modal />
        </View>
      </UserProfile.Provider>
    </SystemProfile.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth-40,
    height: windowHeight,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 20,
    alignItems: 'center'
  }
});
