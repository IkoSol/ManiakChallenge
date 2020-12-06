import React, {useState, useEffect} from 'react';
import {Text, Label, Form, Item, Input, Button, View} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';

export const LoginForm = ({showRegister, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidForm, setIsValidForm] = useState();

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  useEffect(() => {
    let isValidEmail = validateEmail(email);
    if (isValidEmail && password !== '') {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [email, password]);

  return (
    <>
      <Label style={styles.title}>Welcome!</Label>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            value={email}
            autoCapitalize="none"
            keyboardType={'email-address'}
            onChangeText={(value) => setEmail(value)}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            value={password}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </Item>
      </Form>
      <Button
        onPress={() => navigation.replace('Home')}
        disabled={!isValidForm}
        warning
        style={[styles.button, {opacity: !isValidForm ? 0.5 : 1}]}>
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
  form: {
    width: '90%',
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
