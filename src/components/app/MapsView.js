import React from 'react';
import { Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const MyMapView = (props) => {
    return (
        <MapView
            style={{ width: width, height: height }}
            region={props.region}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}>
            <Marker
                coordinate={props.region}>
            </Marker>
        </MapView>
    )
}
export default MyMapView;
