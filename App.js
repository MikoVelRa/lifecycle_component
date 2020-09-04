import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Button from './components/Button';

class App extends React.Component {
  constructor(...props) {
    super(...props);
  }
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button signal={'-'} />
          <Text style={styles.text}>I'm running!!!</Text>
          <Button signal={'+'} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#34495e',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
