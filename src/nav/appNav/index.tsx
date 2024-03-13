import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screen/home';
import Cart from '../../screen/cart';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function AppNav() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#FE554A',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          headerTitleAlign: 'left',
          headerShown: true,
          //   tabBarIcon: ({color, size}) => (
          //     <Banknote color={color} size={size} />
          //   ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#FE554A',
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNav;
