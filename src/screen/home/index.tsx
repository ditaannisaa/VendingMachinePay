import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ModalTopUp} from '../../component/modalTopUp';
import {SearchInput} from '../../component/searchInput';
import Products from '../../component/products';
import {Balance} from '../../component/balance';

export default function Home({navigation}: any) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        backgroundColor: '#F8FBFF',
      }}>
      <View
        style={{
          backgroundColor: '#FF7622',
          flexDirection: 'row',
          height: 56,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Text style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 16}}>
          Hey Brown, What do you like to buy?
        </Text>
        <Icon
          name="account-circle"
          size={30}
          color="#ffffff"
          style={{shadowRadius: 2}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingHorizontal: 16,
        }}>
        <Balance />
        <ModalTopUp />
      </View>
      <SearchInput />
      <Products />
    </ScrollView>
  );
}
