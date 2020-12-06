import React from 'react';
import {Text, Label, Form, Item, Input, Button, View} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';

export const LoginForm = ({showRegister}) => {
  return (
    <>
      <Label style={styles.title}>Welcome!</Label>
      <Form style={{width: '90%'}}>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
      </Form>
      <Button
        onPress={() => console.log('Login Btn')}
        warning
        style={styles.button}>
        <Text style={styles.textBtn}>Login</Text>
      </Button>
      <View style={styles.adviceContainer}>
        <Text style={styles.adviceTxt}>If you are not a member,</Text>
        <TouchableOpacity onPress={() => showRegister()}>
          <Text style={styles.registerTouchable}> Register now!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginTop: 30,
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    width: 170,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 25,
  },
  textBtn: {
    fontWeight: 'bold',
  },
  adviceContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  adviceTxt: {
    color: 'gray',
    fontSize: 14,
  },
  registerTouchable: {
    color: 'orange',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
