import React from 'react';
import {Text, Button} from 'native-base';
import {SafeAreaView} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button onPress={()=>navigation.goBack()}><Text>Go back</Text></Button>
    </SafeAreaView>
  );
};
