import React from 'react';
import { FlatList, Text, Image, StyleSheet, Button, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import 'intl';
import 'intl/locale-data/jsonp/br';

import { useCart } from '../../context/cart';

export default () => {

    const { add, remove, cart, totalValue, subtotal, frete } = useCart();

    return (
        <View style={styles.container}>
        {cart.length === 0 ?
                <Text style={styles.textFound}>Nenhum produto <AntDesign name="shoppingcart" size={24} color="black" /></Text> :
                <View>
                    <Text style={styles.textPrice}>Frete: R${Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(frete)} </Text>
                    <Text style={styles.textPrice}>Subtotal: R${Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(subtotal)} </Text>
                    <Text style={styles.textPrice}>Valor Total: R${Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(totalValue)} </Text>
                </View>
            }

                <ScrollView centerContent>
                    <FlatList
                        data={cart}
                        contentContainerStyle={styles.flatList}
                        renderItem={({ index, item }) => {
                            return (
                                <View style={styles.flatItem}>
                                    <Image style={styles.tinyLogo} source={item.image} />
                                    <Text style={styles.textLetter}>{item.name}</Text>
                                    <Text>R${item.price}</Text>
                                    <View style={styles.buttonsWrapper}>
                                        <TouchableOpacity style={styles.button}>
                                            <Button onPress={() => add(item)} title="+" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button}>
                                            <Button onPress={() => remove(index)} title="-" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}>
                    </FlatList>

                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    flatList: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 24,
        paddingBottom: 40
    },
    flatItem: {
        alignItems: "center",
        width: '100%',
        backgroundColor: "#FFF",
        height: 250,
        padding: 24,
        borderWidth: 0.5,
        borderColor: "#333"
    },
    textPrice: {
        textAlign: "center",
        fontSize: 24
    },
    textFound: {
        fontSize: 24,
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: '65%'
    },
    buttonsWrapper: {
        flexDirection: 'row',
    },
    button: {
        width: 40,
        height: 40,
        margin: 5
    }
});
