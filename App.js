import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import AutoHeightImage from 'react-native-auto-height-image';
import {NavigationContainer} from '@react-navigation/native';
import bg from './src/assets/bg.png'
import UserProfile from './src/Contexts/UserContext';
import SystemProfile from './src/Contexts/SystemContext';
import Erro from './src/Utilities/Erro';
import { windowHeight, windowWidth } from './src/Utilities/Dimensions';
import Modal from './src/Utilities/Modal';
import AppRoutes from './src/Pages/AppRoutes';
import CustomText from './src/Utilities/CustomText';



export default function App() {
  const [userData, setUserData] = useState([])
  const [systemData, setSystemData] = useState([])

  let [fontsLoaded] = useFonts({
    Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold
  });

  return (
    <NavigationContainer>
      <SystemProfile.Provider value={[systemData, setSystemData]}>
        <UserProfile.Provider value={[userData, setUserData]}>
          <StatusBar style="auto" />
            <AutoHeightImage source={bg} width={windowWidth} style={styles.image} />
              <AppRoutes />
              <Modal />
        </UserProfile.Provider>
      </SystemProfile.Provider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    zIndex: 2, 
    left: 0, 
    top: 0, 
    alignItems: 'center',
    paddingHorizontal: 20,
    width: windowWidth,
    paddingTop: 30
  },
  image: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: -30
  }
});
