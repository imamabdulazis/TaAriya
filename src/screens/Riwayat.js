import React, { Component } from 'react'
import { Text, View, StatusBar, FlatList, ActivityIndicator, ToastAndroid } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import styles from '../components/styles'

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
                <FlatList
                    contentContainerStyle={{ marginTop: -10 }}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item, index }) =>
                        <ListItem
                            onPress={() => ToastAndroid.show(item.first_name, ToastAndroid.LONG)}
                            leftAvatar={{ rounded: false, source: { uri: item.avatar } }}
                            title={item.first_name}
                            subtitle={item.email}
                            rightTitle={item.last_name}
                            rightTitleStyle={{ fontSize: 12, color: 'red' }}
                            bottomDivider
                        />
                    }
                    ListFooterComponent={this.renderFooter.bind(this)}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                />
            </View>
        )
    }
}

export default Riwayat
