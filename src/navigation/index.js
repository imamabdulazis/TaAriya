import React from 'react';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import Riwayat from "../screens/Riwayat";
import Acount from "../screens/Acount";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const mainTabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <AntDesign name="home" size={27} color={tintColor} />
            ),
            tabBarOptions: { activeTintColor: '#F4392C' },
            header: null
        }
    },
    Riwayat: {
        screen: Riwayat,
        navigationOptions: {
            tabBarLabel: 'Riwayat',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-timer" size={27} color={tintColor} />
            ),
            header: null
        }
    },
    Akun: {
        screen: Acount,
        navigationOptions: {
            tabBarLabel: 'Profil',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="person-outline" size={27} color={tintColor} />
            ),
            header: null
        }
    }
});

export default mainTabs;