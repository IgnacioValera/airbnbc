import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapViewCustom(props) {
    const { direction, latitudeDelta, longitudeDelta, width, height, name, description } = props;
    console.log(direction);
    //18.850498817131488, -99.20070122359606
    //18.850327788107514, -99.20072704102269
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: direction.latitude || 18.85053721727243,
                    longitude: direction.longitude || -99.20064967336313,
                    latitudeDelta: latitudeDelta || 0.005,
                    longitudeDelta: longitudeDelta || 0.005,
                }}
                zoomEnabled={true}
                scrollEnabled={true}
                zoomControlEnabled={true}
                style={{ width: width || '100%', height: height || '384' }} >
                <Marker
                    key={direction.latitude}
                    coordinate={{
                        latitude: direction.latitude || 18.85053721727243,
                        longitude: direction.longitude || -99.20064967336313
                    }}
                    title={name}
                    description={description}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '384',
    },
});