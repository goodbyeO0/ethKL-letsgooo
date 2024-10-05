import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, theme} from '../theme.js';
import React from 'react';

function Home({navigation}) {
  return (
    <View style={styles.buttonLayout}>
      <TouchableOpacity
        style={styles.buttonScanTag}
        onPress={() => navigation.navigate('ScanTag')}>
        <Text>scan tag</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonScanTag}
        onPress={() => navigation.navigate('WriteTag')}>
        <Text>Write tag</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonScanTag}
        onPress={() => navigation.navigate('History')}>
        <Text>History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonLayout: {
    ...theme.container,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonScanTag: {
    ...theme.button,
    width: '80%',
    backgroundColor: colors.black,
  },
});
export default Home;
