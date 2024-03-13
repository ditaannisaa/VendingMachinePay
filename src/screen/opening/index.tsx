import React, {useState} from 'react';
import {Button, Image, Text, TextInput, View} from 'react-native';

export function OpeningPage({navigation}: any) {
  const [machineCodes] = useState({
    machineCode: 'abcdefg',
  });

  const handleCode = () => {
    navigation.navigate('nav');
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        gap: 10,
        backgroundColor: '#FF7622',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../assets/JPay(1).png')}
        style={{
          width: 300,
          height: 100,
          alignSelf: 'center',
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#F8FBFF',
          alignSelf: 'center',
        }}>
        Welcome, Brown!
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#F8FBFF',
          alignSelf: 'center',
        }}>
        Input the vending machine code
      </Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          padding: 10,
          fontWeight: 'bold',
          backgroundColor: '#F8FBFF',
          borderRadius: 16,
          alignSelf: 'center',
        }}
        value={machineCodes.machineCode}
      />
      <View
        style={{
          width: 200,
          height: 40,
          backgroundColor: '#FF7622',
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Button title="Buy something" color={'green'} onPress={handleCode} />
      </View>
    </View>
  );
}
