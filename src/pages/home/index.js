import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { useCart } from '../../context/cart';

import supermario from "../../../assets/super-mario-odyssey.png";
import callofduty from "../../../assets/call-of-duty-infinite-warfare.png";
import witcher from "../../../assets/the-witcher-iii-wild-hunt.png";
import callofdutywii from "../../../assets/call-of-duty-wwii.png";
import mtk from "../../../assets/mortal-kombat-xl.png";
import sod from "../../../assets/shards-of-darkness.png";
import tmsdm from "../../../assets/terra-media-sombras-de-mordor.png";
import ff18 from "../../../assets/fifa-18.png";
import hzd from "../../../assets/horizon-zero-dawn.png";

export default () => {

    const { add } = useCart();

    const data = [
        {
            "id": `312`,
            "name": "Super Mario Odyssey",
            "price": 197.88,
            "score": 100,
            "image": `${supermario}`
        },
        {
            "id": 201,
            "name": "Call Of Duty Infinite Warfare",
            "price": 49.99,
            "score": 80,
            "image": `${callofduty}`
        },
        {
            "id": 102,
            "name": "The Witcher III Wild Hunt",
            "price": 119.5,
            "score": 250,
            "image": `${witcher}`
        },
        {
            "id": 99,
            "name": "Call Of Duty WWII",
            "price": 249.99,
            "score": 205,
            "image": `${callofdutywii}`
        },
        {
            "id": 12,
            "name": "Mortal Kombat XL",
            "price": 69.99,
            "score": 150,
            "image": `${mtk}`
        },
        {
            "id": 74,
            "name": "Shards of Darkness",
            "price": 71.94,
            "score": 400,
            "image": `${sod}`
        },
        {
            "id": 31,
            "name": "Terra Média: Sombras de Mordor",
            "price": 79.99,
            "score": 50,
            "image": `${tmsdm}`
        },
        {
            "id": 420,
            "name": "FIFA 18",
            "price": 195.39,
            "score": 325,
            "image": `${ff18}`
        },
        {
            "id": 501,
            "name": "Horizon Zero Dawn",
            "price": 115.8,
            "score": 290,
            "image": `${hzd}`
        }
    ]

    function scoreStars(quantity) {
        if (quantity < 100) {
            return (<>
                <AntDesign name="star" size={14} color="black" />
            </>
            )
        }
        if (quantity < 200) {
            return (<>
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
            </>
            )
        }
        if (quantity < 300) {
            return (<>
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
            </>
            )
        }
        if (quantity < 400) {
            return (<>
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
            </>
            )
        }
        if (quantity < 500) {
            return (<>
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
                <AntDesign name="star" size={14} color="black" />
            </>
            )
        }
        return <AntDesign name="star" size={14} color="black" />

    }

    return (
        <SafeAreaView>
            <ScrollView>
                <FlatList
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ alignItems: "center", width: '100%', backgroundColor: "#FFF", height: 250, padding: 24, borderWidth: 0.5, borderColor: "#333", }}>
                                <Image style={styles.tinyLogo} source={item.image} />
                                <Text>{item.name}</Text>
                                <Text>R${item.price} </Text>
                                <Text>{scoreStars(item.score)}</Text>
                                <TouchableOpacity>
                                    <Button title="Comprar" onPress={() => add(item)} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    data={data}
                    keyExtractor={(item) => item.id} />
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
        paddingTop: 20
    }
});
