import React, {useState} from 'react';
import {StyleSheet, Dimensions, ImageBackground, Image, ActivityIndicator} from 'react-native';
import {Container, Content, View} from 'native-base';
import backgroundImg from '../../../images/background.jpeg';
import logo from '../../../images/logo.png';
import {LoginForm} from '../../components/loginForm';
import {RegisterForm} from '../../components/registerForm';

const {width, height} = Dimensions.get('window');

export const Login = ({navigation}) => {
  const [registerView, setRegisterView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowRegister = () => {
    setRegisterView(true);
  };

  const handleHideRegister = () => {
    setRegisterView(false);
  };

  return (
    <Container style={styles.content}>
      {isLoading &&
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" />
        </View>
      }
      <ImageBackground source={backgroundImg} style={styles.backgroundImg}>
        <Content>
          <View style={styles.body}>
            <View style={styles.component}>
              <Image source={logo} style={styles.logo} />
              {!registerView ?
                <LoginForm
                  navigation={navigation}
                  showRegister={() => handleShowRegister()}
                  setIsLoading={loading => setIsLoading(loading)}
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
  content: {
    flex: 1,
    height: height - 121,
  },
  activityIndicator: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    opacity: 0.4,
    backgroundColor: 'white',
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
