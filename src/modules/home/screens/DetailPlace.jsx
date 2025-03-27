import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Image, AirbnbRating } from '@rneui/base';
import React, { useLayoutEffect } from 'react';
import PagerView from 'react-native-pager-view';
import { map } from 'lodash';
import MapViewCustom from '../../../kernel/components/MapViewCustom';
import MapViewLocationCustom from '../../../kernel/components/MapViewLocationCustom';

export default function DetailPlace(props) {
    const { navigation, route } = props;
    const { place } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({ title: place.name });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <ScrollView>
                <PagerView style={styles.pagerView} initialPage={0}>
                    {map(place.images, (images, index) => (
                        <View style={styles.page} key={index}>
                            <Image source={{ uri: images }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                        </View>
                    ))}
                </PagerView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16, marginnVertical: 8 }}>
                    <Text style={{ fontWeight: "bold" }}>{place.name}</Text>
                    <AirbnbRating
                        count={5}
                        defaultRating={place.rating / place.count}
                        size={12}
                        showRating={false}
                        isDisabled={true}
                    />
                </View>
                <Text style={{ color: "gray", marginHorizontal: 16 }}>{place.description}</Text>
                <MapViewCustom
                direction={place.direction}
                latitudeDelta={0.005}
                longitudeDelta={0.005}
                width="100%"
                height={320}
                name={place.name}
                description={place.description}
                />
                <View style={{marginTop: 16}}>
                    <MapViewLocationCustom/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    pagerView: {
        height: 256
    },
    page: {
        flex: 1,
        width: "100%",
        height: 256,
    }
})