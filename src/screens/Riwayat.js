import React, { Component } from 'react'
import { Text, View, StatusBar, FlatList, ActivityIndicator, ToastAndroid, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import styles from '../components/styles'
import { riwww } from '../assets/data/data'
import { Image } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const { width, height } = Dimensions.get('screen');

export class Riwayat extends Component {
    state = {
        data: [],
        value: '',
        isLoading: false,
        refreshing: false
    }
    arrayHolder = [];

    componentDidMount() {
        this.renderGetDummy()
    }


    renderGetDummy = () => {
        this.setState({ isLoading: true })
        fetch('https://reqres.in/api/users?page=2', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((response) => {
                let data = response.data;
                this.setState({ data: data, isLoading: false, refreshing: false })
                this.arrayHolder = response.data;
                // console.info(data);
            }).catch((e) => {
                console.info(e);
            })
    }

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="cari...."
                containerStyle={{ backgroundColor: '#fff', height: 60, marginBottom: 5, marginTop: -1 }}
                inputContainerStyle={{ backgroundColor: '#C4C4C4' }}
                lightTheme
                round
                cancelIcon
                clearIcon
                showLoading={this.state.search}
                autoCorrect={false}
                onChangeText={text => this.searchFilter(text)}
                value={this.state.value}
            />
        )
    }

    searchFilter = text => {
        this.setState({
            value: text,
            search: true
        });
        const newData = this.arrayHolder.filter(item => {
            // const itemData = `${item..toUpperCase()} ${item.customer_address.toUpperCase()}`;
            const itemData = `${item.first_name.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
        setTimeout(() => {
            this.setState({ search: false, })
        }, 1000)
    };


    renderFooter = () => {
        if (!this.state.isLoading) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}>
                <ActivityIndicator animating={this.state.isLoading} size={30} color="grey" />
            </View>
        )
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true
        },
            () => {
                // console.info("Tanggal refresh :", this.state.mdate);
                this.renderGetDummy();
                ToastAndroid.show('Data sudah update.', ToastAndroid.SHORT);
            }

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View>
                    {this.renderHeader()}
                </View>
                <ScrollView>
                    {
                        riwww.map((item) => (
                            <TouchableOpacity key={item.id} style={{ ...styles.cardShadowNoRadiusNew, flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: item.image_url }}
                                    style={{ width: width / 4, height: width / 4, borderRadius: (width / 4) / 2 }}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Title Servis</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Rp 50.0000</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <SimpleLineIcons name="location-pin" size={15} color={'grey'} style={{ marginRight: 5 }} />
                                        <Text>Lokasi Bengkel</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <SimpleLineIcons name="calendar" size={12} color={'grey'} style={{ marginRight: 5, marginLeft: 1 }} />
                                        <Text>Tanggal</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default Riwayat
