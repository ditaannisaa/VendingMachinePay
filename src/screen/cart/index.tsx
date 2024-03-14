import React, {useState} from 'react';
import {Alert, Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CartCard} from '../../component/CartCard';
import {withdrawal} from '../../redux/slice/balanceSlice';
import {removeAll, removeItem} from '../../redux/slice/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const balanceAmount = useSelector((state: any) => state?.balance?.balance);
  const cartList = useSelector((state: any) => state.cart?.cartItems);
  // console.log(cartList);
  const [allTotal, setAllTotal] = useState(0);
  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      total += cartList[i].quantity * cartList[i].price;
    }
    return total;
  };

  const handleCheckout = () => {
    if (totalPrice() > balanceAmount) {
      Alert.alert('Insufficient balance');
    } else {
      dispatch(withdrawal({total: totalPrice()}));
      dispatch(removeAll(cartList));
      Alert.alert('Transaction completed successfully');
    }
  };

  // console.log(allTotal + 'initotal');
  return (
    <View
      style={{
        backgroundColor: '#F8FBFF',
        flex: 1,
      }}>
      <CartCard />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          marginHorizontal: 16,
          height: 70,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#FF7622',
          }}>
          Total Rp {totalPrice()}
        </Text>
        <Pressable onPress={() => handleCheckout()}>
          <Text
            style={{
              width: 90,
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 10,
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Checkout
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
