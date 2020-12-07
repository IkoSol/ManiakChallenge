import React, {useEffect, useState} from 'react';
import {Text, Content, Container, View, List, ListItem, Left, Thumbnail, Body} from 'native-base';
import {StyleSheet, Dimensions, ActivityIndicator, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

export const Home = ({navigation, token}) => {
  const [userToken, setUserToken] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imagesData, setImagesData] = useState();
  useEffect(() => {
    getUserToken();
  }, []);

  useEffect(() => {
    if (!userToken) return;
    getImageData();
  }, [userToken]);

  const getUserToken = async () => {
    await AsyncStorage.getItem('userToken').then(token => {
      setUserToken(token);
    });
  };

  const getImageData = async () => {
    setIsLoading(true);
    getUserToken();
    let url = 'https://challenge.maniak.co/api/images';
    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
      let json = await response.json();
      setImagesData(json);
      setIsLoading(false);
      return json.movies;
    } catch (error) {
      Alert.alert('Error fetching data');
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const imageList = imagesData && imagesData.map( image => {
      return (
        <View key={image.id}>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: image.image}} />
            </Left>
            <Body>
              <Text>{image.title}</Text>
              <Text note numberOfLines={1}>
                {image.description}
              </Text>
            </Body>
          </ListItem>
        </View>
      );
    });

  return (
    <Container style={styles.container}>
      {isLoading &&
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" />
        </View>
      }
      <Content style={styles.content}>
        <View style={styles.mainView}>
          <List style={styles.listContainer}>
            {imageList}
          </List>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
  },
  container: {
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
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: width,
    padding: 20,
  },
});
