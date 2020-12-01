import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/home';
import Cart from '../pages/cart';
import CartProvider, { useCart } from '../context/cart';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Cart" component={Cart} options={{ tabBarIcon: IconWithBadge }} />
                </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}

function IconWithBadge() {

    const { cart } = useCart();

    return (
        <View style={{ width: 24, height: 24, margin: 5, alignItems: "center", justifyContent: "center" }}>
            <Text>{Object.keys(cart).length}</Text>
        </View>
    )
}