import React, {useState, useEffect} from 'react';
import {Form, Item, Label, Input, Button, Text} from 'native-base';
import {StyleSheet, Alert} from 'react-native';

export const RegisterForm = ({hideRegister}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidForm, setIsValidForm] = useState();

  useEffect(() => {
    if (userName !== '' && password !== '' && confirmPassword !== '') {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [userName, password, confirmPassword]);

  const handleHideRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password is not matching');
      return;
    } 
    hideRegister();
  };

  return (
    <>
      <Form style={{width: '90%'}}>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            value={userName}
            autoCapitalize="none"
            keyboardType={'email-address'}
            onChangeText={value => setUserName(value)}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            value={password}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Confirm password</Label>
          <Input
            value={confirmPassword}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={value => setConfirmPassword(value)}
          />
        </Item>
      </Form>
      <Button
        onPress={() => handleHideRegister()}
        warning
        disabled={!isValidForm}
        style={[styles.button, {opacity: !isValidForm ? 0.5 : 1}]}>
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
