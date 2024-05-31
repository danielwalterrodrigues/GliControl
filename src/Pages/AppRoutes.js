import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Start';
import Dashboard from './Dashboard';
import CreateMoments from './CreateMoments';
import Register from './Register';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {

    return(
      
        <Stack.Navigator initialRouteName="Start" screenOptions={{contentStyle: {backgroundColor: 'transparent', headerTransparent: true}}}>
          <Stack.Screen name="Home" component={Start} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
          <Stack.Screen name="CreateMoments" component={CreateMoments} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false, statusBarColor: '#700700', statusBarStyle: 'light'}}  />
        </Stack.Navigator>
      
    )
}
export default AppRoutes


