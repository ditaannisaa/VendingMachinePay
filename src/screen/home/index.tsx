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
import {Product} from '../../types/productType';

export default function Home({navigation}: any) {
  const [searchItem, setSearchItem] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState<Product[]>([]);
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
      <SearchInput
        data={data}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <Products data={data} setData={setData} searchResults={searchResults} />
    </ScrollView>
  );
}
