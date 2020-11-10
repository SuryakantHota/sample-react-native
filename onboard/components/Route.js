import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const RouteSec = ({navigation}) => {

    useEffect(() => {
        AsyncStorage.getItem('initialLunch').then(value1 => {
            if ( !value1 ) {
                navigation.navigate('Login');
            } else {
                navigation.navigate('Onboarding');
            }
        });
    }, []);

    return null;
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

export default RouteSec;

