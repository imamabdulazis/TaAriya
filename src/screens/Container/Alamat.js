import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../components/styles';
import MapView, { Marker } from 'react-native-maps';

const Alamat = () => {
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    return (
        <View style={styles.container}>
            <MapView
                style={{ width: '90%', height: '40%', marginHorizontal: 20, marginVertical: 20 }}
                region={region}
                followsUserLocation
                zoomEnabled
                showsPointsOfInterest
                showsBuildings
                showsUserLocation={true}>
                <Marker
                    coordinate={region}>
                </Marker>
            </MapView>
            <Text style={{ paddingVertical: 10, paddingHorizontal: 20, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: 'grey' }}>Alamat</Text>
            <View style={{ marginHorizontal: 20, padding: 10, marginVertical: 10, backgroundColor: 'white', borderRadius: 10 }}>
                <Text>Nama Alamt</Text>
                <Text>Nama Alamt</Text>
                <Text>Nama Alamt</Text>
                <Text>Nama Alamt</Text>
            </View>
        </View>
    );
}

export default Alamat;
