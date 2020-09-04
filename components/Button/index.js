import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

class ButtonControllers extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <View style={styleButton.buttoncito}>
        <Text style={styleButton.signo}>{this.props.signal}</Text>
      </View>
    );
  }
}

const styleButton = StyleSheet.create({
  buttoncito: {
    backgroundColor: '#ecf0f1',
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  signo: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ButtonControllers;
