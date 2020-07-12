import React from 'react';
import { Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import { Image } from 'react-native';
import * as nav from '../services/nav';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Spacer from '../components/common/Spacers';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('screen');

const Servis = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ ...styles.cardShadowNoRadiusNew }}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1572838955527-d004a55a98cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" }}
                        style={{ width: width - 70, height: width / 2 }}
                    />
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Title Servis</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'orange' }}>Rp 50.0000</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: '500', fontSize: 14 }}>Status</Text>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'orange' }}>Menunggu</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SimpleLineIcons name="location-pin" size={15} color={'grey'} style={{ marginRight: 5 }} />
                            <Text>Lokasi Bengkel</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SimpleLineIcons name="calendar" size={12} color={'grey'} style={{ marginRight: 5, marginLeft: 1 }} />
                                <Text>Tanggal</Text>
                            </View>
                            <TouchableOpacity onPress={() => nav.navigate('detailServis')} style={{ paddingHorizontal: 10, paddingVertical: 4, backgroundColor: 'green', borderRadius: 10, }}>
                                <Text style={{ color: 'white' }}>Detail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Spacer />
                <MapView
                    style={{ width: width - 40, height: width / 2, marginHorizontal: 20, marginVertical: 20 }}
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
                <Spacer />
                <Spacer />
                <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, width: width / 2 - 30, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="chat" size={20} color={'grey'} />
                        <Text>Tanyakan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, width: width / 2 - 30, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="flight-takeoff" size={20} color={'grey'} />
                        <Text style={{ width: width / 3 }}>Ambil Sekarang</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

export default Servis;
