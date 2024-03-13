import React, {useState} from 'react';
import {Text} from 'react-native';

export const Balance = () => {
  const [balance, setBalance] = useState(0);
  return (
    <Text
      style={{
        fontWeight: 'bold',
        color: '#FF7622',
        fontSize: 20,
      }}>
      Your Balance: Rp {balance}
    </Text>
  );
};
