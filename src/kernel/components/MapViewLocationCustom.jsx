import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

export default function MapViewLocationCustom() {
    const [location, setLocation] = useState(null); // ubicación actual
    const [newLocation, setNewLocation] = useState(null); // ubicación seleccionada manualmente
    let subscription;

    const startTracking = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permiso de ubicación denegado");
            return;
        }

        subscription = await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.High,
                timeInterval: 1000,
                distanceInterval: 1,
            },
            (loc) => {
                setLocation(loc.coords);
                console.log("MapViewLocationCustom -> loc", loc.coords);
            }
        );
    };

    useEffect(() => {
        startTracking();
        return () => {
            if (subscription) subscription.remove();
        };
    }, []);

    const handleMapPress = (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setNewLocation({ latitude, longitude });
    };

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002,
                    }}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    zoomControlEnabled={true}
                    style={{ width: "95%", height: 384 }}
                    onPress={handleMapPress}
                >
                    {/* Marker de ubicación actual */}
                    {!newLocation && (
                        <Marker
                            key={location.latitude}
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title={"Ubicación actual"}
                            description={"Ubicación actual del usuario"}
                        />
                    )}

                    {/* Marker de nueva ubicación seleccionada */}
                    {newLocation && (
                        <Marker
                            coordinate={newLocation}
                            title={"Nueva ubicación"}
                            description={"Ubicación seleccionada manualmente"}
                            pinColor="blue"
                        />
                    )}
                </MapView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});