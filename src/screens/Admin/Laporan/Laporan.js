import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerActions } from '@react-navigation/native';

class Laporan extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle: "Laporan",
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
                <Text> Laporan </Text>
            </View>
        );
    }
}

export default Laporan;
