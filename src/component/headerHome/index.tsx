import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeaderHome = () => {
  return (
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
        Hey Brown, What do you want to buy?
      </Text>
      <Icon
        name="account-circle"
        size={30}
        color="#ffffff"
        style={{shadowRadius: 2}}
      />
    </View>
  );
};
