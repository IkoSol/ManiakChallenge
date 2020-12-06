import 'react-native-gesture-handler';
import React from 'react';
import {Login} from './src/views/login';
import {Home} from './src/views/home';
import {Settings} from './src/views/settings';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
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
