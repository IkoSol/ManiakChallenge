import 'react-native-gesture-handler';
import React, {useEffect, useState, useMemo} from 'react';
import {Login} from './src/views/login';
import {Home} from './src/views/home';
import {Settings} from './src/views/settings';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [userToken, setUserToken] = useState();
  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = async () => {
    await AsyncStorage.getItem('userToken').then(token => {
      setUserToken(token);
    });
  };

  const MainView = userToken === null ? 'Login' : 'Home';
  if (userToken === undefined) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainView}>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          children={({navigation}) => {
            return (
              <Drawer.Navigator initialRouteName={'Home'}>
                <Drawer.Screen
                  options={{
                    headerShown: true,
                    headerStyle: {
                      backgroundColor: 'orange',
                    },
                    headerTitleStyle: {
                      color: 'white',
                      fontWeight: 'bold',
                    },
                    headerTintColor: '#fff',
                  }}
                  name="Home"
                  component={Home}
                />
                <Drawer.Screen
                  name={'Settings'}
                  component={Settings}
                  options={{
                    headerShown: true,
                    headerStyle: {
                      backgroundColor: 'orange',
                    },
                    headerTitleStyle: {
                      color: 'white',
                      fontWeight: 'bold',
                    },
                    headerTintColor: '#fff',
                  }}
                />
              </Drawer.Navigator>
            );
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
