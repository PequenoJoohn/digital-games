import React from 'react';
import { FlatList, Text, Image, StyleSheet, Button, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'intl';
import 'intl/locale-data/jsonp/br';

import { useCart } from '../../context/cart';

export default () => {

    const { add, remove, cart, totalValue, frete } = useCart();

    return (
        <SafeAreaView>
            <ScrollView centerContent>
                <FlatList
                    data={cart}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ index, item }) => {
                        return (
                            <View style={{ alignItems: "center", width: '100%', backgroundColor: "#FFF", height: 200, padding: 24, borderWidth: 0.5, borderColor: "#333", }}>
                                <Image style={styles.tinyLogo} source={item.image} />
                                <Text style={styles.textLetter}>{item.name}</Text>
                                <Text>R${item.price}</Text>
                                <View style={styles.buttons}>
                                    <TouchableOpacity>
                                        <Button onPress={() => add(item)} title="+" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Button onPress={() => remove(index)} title="-" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id}>
                </FlatList>
                {cart.length === 0 ?
                    <Text style={styles.textFound}>Nenhum produto</Text> :
                    <>
                        <Text style={styles.textPrice}>Frete: R${Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(frete)} </Text>
                        <Text style={styles.textPrice}>Valor Total: R${Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(totalValue)} </Text>
                    </>
                }
            </ScrollView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
    },
    flatList: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 20,
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
    buttons: {
        flexDirection: 'row'
    }
});
