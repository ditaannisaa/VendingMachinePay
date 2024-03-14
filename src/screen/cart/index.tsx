import React from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

export default function Cart() {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: '#F8FBFF',
        flex: 1,
        margin: 16,
        gap: 20,
      }}>
      <View
        style={{
          width: '100%',
          height: '112px',
          backgroundColor: 'yellow',
          flexDirection: 'row',
          padding: 12,
          gap: 10,
        }}>
        <Image
          // source={{uri: `${item.image}`}}
          style={{
            width: 100,
            height: 104,
            backgroundColor: 'gray',
            borderRadius: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: 100,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            Biskuit
          </Text>
          <Text></Text>
        </View>
        <View>
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  );
}
