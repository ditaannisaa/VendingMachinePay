import React, {useEffect, useState} from 'react';
import {TextInput, View, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Product} from '../../types/productType';

export const SearchInput = ({
  data,
  searchItem,
  setSearchItem,
  setSearchResults,
}: any) => {
  const handleSearch = () => {
    const filteredItems = data?.filter(item => {
      if (typeof item?.product_name === 'string') {
        return item.product_name
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      }
    });
    setSearchResults(filteredItems);
  };

  console.log(searchItem);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
      }}>
      <TextInput
        style={{
          height: 60,
          padding: 10,
          backgroundColor: '#F5F5F5',
          borderRadius: 16,
          width: '70%',
        }}
        placeholder="Search foods"
        value={searchItem}
        onChangeText={e => setSearchItem(e)}
      />
      <Pressable onPress={handleSearch}>
        <Text
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#FF7622',
            padding: 10,
            borderRadius: 16,
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            textAlignVertical: 'center',
          }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};
