import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Product} from '../../types/productType';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/slice/cartSlice';

const App = () => {
  const [data, setData] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const productsData = () => {
    fetch('https://api.npoint.io/30d162a298d5bb30b970')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    productsData();
  }, []);

  const handleAddCart = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <View style={styles.container}>
      {data?.map(item => (
        <View key={item.id} style={styles.item}>
          <Image
            source={{uri: `${item.image}`}}
            style={{width: 122, height: 104}}
          />
          <View style={{flexDirection: 'row', gap: 17, alignItems: 'flex-end'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>
                {item.product_name}
              </Text>
              <Text>{item.price}</Text>
              <Text>Stock: {item.stock}</Text>
            </View>
            <View>
              <Pressable onPress={() => handleAddCart(item)}>
                <Icon
                  name="cart-plus"
                  style={{
                    fontSize: 25,
                    backgroundColor: '#FF7622',
                    width: 40,
                    height: 40,
                    padding: 5,
                    borderRadius: 100,
                    color: '#FFFFFF',
                    textAlign: 'center',
                  }}
                />
              </Pressable>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingHorizontal: 12,
    marginBottom: 16,
    paddingVertical: 25,
    width: '151px',
    height: '193px',
    gap: 8,
    elevation: 5,
  },
});

export default App;
