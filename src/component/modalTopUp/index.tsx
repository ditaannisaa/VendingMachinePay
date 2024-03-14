import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {moneyAmount} from '../../assets/data/dummy';
import {useDispatch} from 'react-redux';
import {topUp} from '../../redux/slice/balanceSlice';

export const ModalTopUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const dispatch = useDispatch();

  const handleamount = (amountPrice: number) => {
    setSelectedAmount(amountPrice);
  };

  const handleTopUp = (amount: number) => {
    dispatch(topUp({amount: selectedAmount}));
  };
  console.log(selectedAmount);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please insert your money with these selected amount into the
              machine!
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 20,
                  width: '100%',
                }}>
                {moneyAmount.slice(0, 3).map(amountItem => (
                  <Pressable
                    onPress={() => handleamount(amountItem.amount)}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={[styles.modalText, styles.amountText]}>
                      {amountItem.amount}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 20,
                  width: '100%',
                }}>
                {moneyAmount.slice(3, 5).map(amountItem => (
                  <Pressable
                    onPress={() => handleamount(amountItem.amount)}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={[styles.modalText, styles.amountText]}>
                      {amountItem.amount}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <Text style={styles.modalText}>Your top up amount</Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Rp {selectedAmount}
              </Text>
            </View>

            <LottieView
              source={require('../../assets/moneypay.json')}
              style={{width: 150, height: 150}}
              autoPlay
              loop
            />
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                width: '100%',
              }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: 'green',
                  borderRadius: 20,
                  padding: 10,
                }}
                onPress={() => handleTopUp(selectedAmount)}>
                <Text style={styles.textStyle}>Top Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Icon name="plus-circle" color="#FF7622" size={35} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignSelf: 'flex-end',
  },
  buttonOpen: {
    height: 35,
    justifyContent: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    padding: 5,
  },
  amountText: {
    width: 70,
    height: 30,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
