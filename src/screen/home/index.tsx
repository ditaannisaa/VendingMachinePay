import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

import {ModalTopUp} from '../../component/modalTopUp';
import {SearchInput} from '../../component/searchInput';
import Products from '../../component/products';
import {Balance} from '../../component/balance';
import {HeaderHome} from '../../component/headerHome';

export default function Home({navigation}: any) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        backgroundColor: '#F8FBFF',
      }}>
      <HeaderHome />
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
