import React from 'react';
import {Text, Button} from 'native-base';
import {SafeAreaView, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Settings = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert(
      "Logging out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Log out", onPress: () => doLogout() },
      ],
      { cancelable: false }
    );
  };

  const doLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.replace('Login');
    } catch (err) {
      console.log('Error', err);
    }
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
