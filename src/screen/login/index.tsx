import React, {useState} from 'react';
import {Button, Image, Pressable, Text, TextInput, View} from 'react-native';

export function Login({navigation}: any) {
  const [login] = useState({
    email: 'brown@example.com',
    password: '12345678',
  });

  const handleLogin = () => {
    navigation.navigate('opening');
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
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
          fontSize: 16,
          fontWeight: 'bold',
          color: '#F8FBFF',
          marginBottom: 10,
        }}>
        Email
      </Text>
      <TextInput
        style={{
          height: 40,
          backgroundColor: '#F8FBFF',
          borderRadius: 16,
          marginBottom: 20,
        }}
        value={login.email}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#F8FBFF',
          marginBottom: 10,
        }}>
        Password
      </Text>
      <TextInput
        style={{
          height: 40,
          padding: 10,
          backgroundColor: '#F8FBFF',
          borderRadius: 16,
          marginBottom: 20,
        }}
        secureTextEntry={true}
        value={login.password}
      />
      <Pressable
        onPress={handleLogin}
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            width: 90,
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 10,
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </Pressable>
    </View>
  );
}
