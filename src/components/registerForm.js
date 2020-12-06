import React from 'react';
import {Form, Item, Label, Input, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export const RegisterForm = ({hideRegister}) => {
  return (
    <>
      <Form style={{width: '90%'}}>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Confirm password</Label>
          <Input />
        </Item>
      </Form>
      <Button
        onPress={() => console.log('Register Btn')}
        warning
        style={styles.button}>
        <Text style={styles.textBtn}>Register</Text>
      </Button>
      <Button onPress={() => hideRegister()} warning style={styles.button}>
        <Text style={styles.textBtn}>Cancel</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
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
});
