import React, { Component } from 'react'
import {
    Text, View, StyleSheet,
    StatusBar, Dimensions
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

export class Home extends Component {
    state = {
        region: {
            latitude: -7.797068,
            longitude: 110.370529,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
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

    onRegionChange(region) {
        this.setState({ region:region });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#F4392C' />
                <View style={{
                    width: width, height: 100,
                    backgroundColor: '#F4392C'
                }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        marginHorizontal: 20, alignItems: 'center'
                    }}>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Home</Text>
                            <Text style={{ color: '#fff', }}>Cari bengkal terdekat dengan sekali sentuh</Text>
                        </View>
                        <AntDesign name='arrowright' size={20} color='#fff' />
                    </View>
                </View>
                <MapView
                    style={styles.container}
                    provider='google'
                    mapType='terrain'
                    showsCompass
                    showsScale
                    zoomEnabled
                    zoomTapEnabled
                    region={this.state.region}
                    // onRegionChange={this.onRegionChange}
                >
                    {this.state.isMapReady &&
                        <MapView.Marker
                            title={this.props.title}
                            coordinate={{
                                latitude: this.state.region.latitude,
                                longitude: this.state.region.longitude
                            }} />
                    }
                </MapView>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
