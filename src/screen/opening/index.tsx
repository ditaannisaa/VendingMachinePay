import React, {useState} from 'react';
import {Button, Image, Pressable, Text, TextInput, View} from 'react-native';

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

      <Pressable
        onPress={handleCode}
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            width: 200,
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 10,
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            margin: 10,
          }}>
          Let's Buy Something!
        </Text>
      </Pressable>
    </View>
  );
}
