import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import AutoHeightImage from 'react-native-auto-height-image';
import {NavigationContainer} from '@react-navigation/native';
import bg from './src/assets/bg.png'
import UserProfile from './src/Contexts/UserContext';
import SystemProfile from './src/Contexts/SystemContext';
import LocaleProfile from './src/Contexts/LocaleContext';
import Erro from './src/Utilities/Erro';
import { windowHeight, windowWidth } from './src/Utilities/Dimensions';
import Modal from './src/Utilities/Modal';
import AppRoutes from './src/Pages/AppRoutes';
import CustomText from './src/Utilities/CustomText';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import ToastAll from './src/Utilities/Toast';
import { ptBr, enUs } from './src/Utilities/Locale';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [userData, setUserData] = useState([])
  const [systemData, setSystemData] = useState([])
  const [locale, setLocale] = useState([])

  let [fontsLoaded] = useFonts({
    Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AlertNotificationRoot theme='dark'>
        <SystemProfile.Provider value={[systemData, setSystemData]}>
        <LocaleProfile.Provider value={[locale, setLocale]}>
          <UserProfile.Provider value={[userData, setUserData]}>
              <ImageBackground source={bg} resizeMethod='auto' resizeMode='stretch' style={styles.image}>
                <AppRoutes />
                <Modal />
                <ToastAll />
              </ImageBackground>
            </UserProfile.Provider>
          </LocaleProfile.Provider>
        </SystemProfile.Provider>
        </AlertNotificationRoot>
      </NavigationContainer>
    </GestureHandlerRootView>
    
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
    width: windowWidth,
    height: windowHeight+80
  }
});
