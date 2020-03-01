import React, { Component } from 'react'
import {
    Text, View, StyleSheet,
    StatusBar, Dimensions
} from 'react-native'
import MapView, { Callout, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MyMapView from './MapsView';
import MapInput from './MapInput';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

export class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: -7.797068,
                longitude: 110.370529,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            name: 'Yogyakarta',
            alamat: 'Daerah Istimewa Yogyakarta',
        }

    }

    componentDidMount() {
        this.getInitialState
    }

    getInitialState() {
        getLocation().then(
            (data) => {
                console.log(data);
                this.setState({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    },
                });
            }
        );
    }

    onMapLayout = () => {
        this.setState({ isMapReady: true })
    }

    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }


    getNameLocation(name) {
        this.setState({
            name: name.main_text,
            alamat: name.secondary_text,
        });
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <MapView
                        style={{ width: width, height: height, marginTop: 50 }}
                        provider={PROVIDER_GOOGLE}
                        mapType='hybrid'
                        // showsScale
                        zoomControlEnabled
                        showsCompass
                        zoomEnabled={true}
                        showsPointsOfInterest
                        showsBuildings
                        onLayout={this.onMapLayout}>
                        {this.state.isMapReady &&
                            <Marker
                                title={this.props.title}
                                coordinate={{
                                    latitude: this.state.region.latitude,
                                    longitude: this.state.region.longitude
                                }}
                            />
                        }
                    </MapView>
                    <Callout>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <MapInput
                                notifyChange={(loc) => this.getCoordsFromName(loc)}
                                nameChange={(name) => this.getNameLocation(name)}
                            />
                            {
                                this.state.region['latitude'] ?
                                    <View style={{ flex: 1, }}>
                                        <MyMapView
                                            style={{ width: width, height: height }}
                                            region={this.state.region}
                                            onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                                    </View> : null}
                        </View>
                    </Callout>
                </View>
                <View style={styles.cardShadowWhiteSmallLEftPadding2}>
                    <Text style={{ color: '#C4C4C4', fontFamily: 'SFProDisplay-Regular', fontSize: 14 }}>Lokasi</Text>
                    <View style={styles.divRowBetwen}>
                        <View style={{ ...styles.divRowStart }}>
                            <EvilIcons name='location' size={30} color='#C4C4C4' />
                            <View style={{ width: width - 100 }}>
                                <Text style={{ color: '#3B485A', fontFamily: 'SFProDisplay-Regular', fontSize: 14, textAlign: 'left' }}>{this.state.name}</Text>
                                <Text style={{ color: 'grey', fontFamily: 'SFProDisplay-Regular', fontSize: 14, textAlign: 'left' }}>{this.state.alamat}</Text>
                            </View>
                        </View>
                        <View />
                    </View>
                </View>
            </View>
        )
    }
}

export default Maps;