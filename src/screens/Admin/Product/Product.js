import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class Product extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle: "Produk",
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={{ marginHorizontal: 20 }}>
                    <SimpleLineIcons name="menu" size={25} color={'black'} />
                </TouchableOpacity>
            )
        })
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Product </Text>
            </View>
        );
    }
}

export default Product;