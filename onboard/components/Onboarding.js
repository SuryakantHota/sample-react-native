import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-community/async-storage';

const OnboardingSec = ({navigation}) => {
    return (

        <Onboarding
        onSkip={() => {
            AsyncStorage.setItem('initialLunch', false);
            navigation.navigate('Login');
        }}
        onDone={() => {
            AsyncStorage.setItem('initialLunch', false);
            navigation.navigate('Login');
        }}
        pages={[
          {
            backgroundColor: '#fff',
            image: null,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: null,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    );
}


const style = StyleSheet.compose({
    container: {
      backgroundColor: '#ffffff',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    splashTitle: {
      fontSize: 30,
      marginTop: 30
    },
    splashDesc: {
      fontSize: 14,
      marginTop: 20,
      textAlign: 'center',
      paddingHorizontal: '10%'
    },
    nextButton: {
      paddingVertical: 12,
      paddingHorizontal: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      width: 200,
      marginTop: 100
    },
    iconSize: {
      width: 22,
      height: 22
    }
})

export default OnboardingSec;

