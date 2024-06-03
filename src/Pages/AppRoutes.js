
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Start';
import Dashboard from './Dashboard';
import CreateMoments from './CreateMoments';
import Register from './Register';
import AllRegistries from './AllRegistries';
import { MMKV } from "react-native-mmkv";
import { useEffect, useContext, useState } from 'react';
import UserProfile from '../Contexts/UserContext';


const storage = new MMKV()
const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const [userData, setUserData] = useContext(UserProfile)
  const storagedUser = storage.getString('@GliControl')
  const [page, setPage] = useState(false)

  useEffect(()=>{
    if(storage.contains('@GliControl')){
      const obj = JSON.parse(storagedUser)
      setUserData(obj)
    }
  }, [])

  useEffect(()=>{
    if(userData.name != undefined){
      storage.set('@GliControl', JSON.stringify(userData))
    }
  }, [userData])

  console.log('User: '+storagedUser)

    return(
      
        <Stack.Navigator initialRouteName={storage.contains('@GliControl') ? 'Dashboard' : 'Home'} screenOptions={{contentStyle: {backgroundColor: 'transparent', headerTransparent: true}}}>
          <Stack.Screen name="Home" component={Start} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
          <Stack.Screen name="CreateMoments" component={CreateMoments} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
          <Stack.Screen name="AllRegistries" component={AllRegistries} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
        </Stack.Navigator>
      
    )
}
export default AppRoutes


