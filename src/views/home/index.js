import React from 'react';
import {Text, Button, Content, Container, View} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Home = ({navigation}) => {
  return (
    <Content style={styles.content}>
      <Container style={styles.container}>
        <View style={styles.mainView}>
          <Text>Home Screen</Text>
        </View>
      </Container>
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
  },
  container: {
    height: height - 121,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
