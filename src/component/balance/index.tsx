import React, {useState} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

export const Balance = () => {
  const [balance, setBalance] = useState(0);
  const balanceAmount = useSelector((state: any) => state?.balance?.balance);
  console.log(balanceAmount);
  return (
    <Text
      style={{
        fontWeight: 'bold',
        color: '#FF7622',
        fontSize: 20,
      }}>
      Your Balance: Rp {balanceAmount}
    </Text>
  );
};
