import React from 'react';
import {ScrollView, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Cart() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View
      style={{
        backgroundColor: '#F8FBFF',
        flex: 1,
        margin: 16,
        gap: 20,
      }}>
      <Text>Hello</Text>
    </View>
  );
}
