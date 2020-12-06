import React from 'react';
import {Text, Button} from 'native-base';
import {SafeAreaView, StyleSheet} from 'react-native';

export const Settings = ({navigation}) => {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Button warning style={styles.button} onPress={() => handleLogout()}>
        <Text>Log out</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    alignSelf: 'center',
  },
});
