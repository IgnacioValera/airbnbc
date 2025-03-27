import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Image, AirbnbRating } from '@rneui/base';

export default function ListHouses(props) {
    const { images, name, description, price, rating, count, direction, navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.navigate("DetailPlaceStack", { place: { images, name, description, price, rating, count, direction } })}>
            <Card>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: images ? images[0] : 'https://placehold.co/80x80.png' }} style={{ width: 80, height: 80 }} />
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                            <AirbnbRating
                                count={5}
                                defaultRating={Math.max(1, Math.min(5, rating / (count - 1)))}
                                size={12}
                                showRating={false}
                                isDisabled={true}
                            />
                        </View>
                        <Text>{description}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>
                            {price ? `$${price}` : "Precio no disponible"}
                        </Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

})