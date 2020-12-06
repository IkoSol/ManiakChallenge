import React, {useState} from 'react';
import {StyleSheet, Dimensions, ImageBackground, Image} from 'react-native';
import {Container, Content, View} from 'native-base';
import backgroundImg from '../../../images/background_2.jpg';
import logo from '../../../images/logo.png';
import {LoginForm} from '../../components/loginForm';
import {RegisterForm} from '../../components/registerForm';

const {width, height} = Dimensions.get('window');

export const Login = ({navigation}) => {
  const [registerView, setRegisterView] = useState(false);

  const handleShowRegister = () => {
    setRegisterView(true);
  };

  const handleHideRegister = () => {
    setRegisterView(false);
  };

  return (
    <Container>
      <ImageBackground source={backgroundImg} style={styles.backgroundImg}>
        <Content>
          <View style={styles.body}>
            <View style={styles.component}>
              <Image source={logo} style={styles.logo} />
              {!registerView ?
                <LoginForm
                  navigation={navigation}
                  showRegister={() => handleShowRegister()}
                />
              :
                <RegisterForm hideRegister={() => handleHideRegister()} />
              }
            </View>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  backgroundImg: {
    width: '100%',
    flex: 1,
  },
  body: {
    height: height,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 25,
    marginTop: 10,
  },
  component: {
    height: '60%',
    width: '80%',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginTop: 70,
    alignItems: 'center',
  },
});
