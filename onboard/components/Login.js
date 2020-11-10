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

export default class Login extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={style.container}>
        <Text style={style.splashDesc}>Login here</Text>
      </View>
    );
  }
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

