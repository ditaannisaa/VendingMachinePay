import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchInput = () => {
  return (
    <View>
      <TextInput
        style={{
          height: 60,
          padding: 10,
          backgroundColor: '#F5F5F5',
          borderRadius: 16,
          margin: 16,
        }}
        placeholder="Search foods"
      />
    </View>
  );
};
