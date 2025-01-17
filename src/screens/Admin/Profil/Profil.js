import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerActions } from '@react-navigation/native';
import UbahProfil from '../../Container/UbahProfil';
import styles from '../../../components/styles';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle: "Profil",
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
            <View style={styles.container}>
                <UbahProfil />
            </View>
        );
    }
}

export default Profil;
