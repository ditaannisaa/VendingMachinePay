import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeItem} from '../../redux/slice/cartSlice';

export const CartCard = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state: any) => state.cart?.cartItems);

  const handleDeleteCart = (item: any) => {
    dispatch(removeItem(item));
  };
  return (
    <ScrollView
      style={{
        backgroundColor: '#F8FBFF',
        flex: 1,
        margin: 16,
        gap: 20,
        height: '100%',
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
            <Text>Rp {item.price}</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: 100,
              gap: 10,
            }}>
            <Text>{item.quantity}x</Text>
            <Pressable
              onPress={() => handleDeleteCart(item.id)}
              style={{marginTop: 40}}>
              <Text
                style={{
                  width: 80,
                  backgroundColor: 'red',
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
  );
};
