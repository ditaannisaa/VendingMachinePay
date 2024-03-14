import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
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
          // backgroundColor: 'yellow',
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
            flexDirection: 'column',
            width: 100,
            gap: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Biskuit
          </Text>
          <Text>Rp 5000</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: 100,
            gap: 10,
          }}>
          <Text>2x</Text>
          <Pressable style={{marginTop: 40}}>
            <Text
              style={{
                width: 80,
                backgroundColor: '#FE554A',
                padding: 10,
                borderRadius: 10,
                color: 'white',
                textAlign: 'center',
              }}>
              Delete
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
