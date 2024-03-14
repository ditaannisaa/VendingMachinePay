import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector((state: any) => state.cart?.cartItems);
  // console.log(cartList);
  return (
    <View
      style={{
        backgroundColor: '#F8FBFF',
        flex: 1,
      }}>
      <ScrollView
        style={{
          backgroundColor: '#F8FBFF',
          flex: 1,
          margin: 16,
          gap: 20,
        }}>
        {cartList.map((item: any) => (
          <View
            style={{
              width: '100%',
              height: '112px',
              backgroundColor: 'white',
              flexDirection: 'row',
              padding: 12,
              gap: 10,
              elevation: 5,
              borderRadius: 20,
              marginVertical: 5,
            }}>
            <Image
              source={{uri: `${item.image}`}}
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
                {item.product_name}
              </Text>
              <Text>Rp 5000</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: 100,
                gap: 10,
              }}>
              <Text>{item.quantity}x</Text>
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
        ))}
      </ScrollView>
      <View>
        <Text>Checkout</Text>
      </View>
    </View>
  );
}
