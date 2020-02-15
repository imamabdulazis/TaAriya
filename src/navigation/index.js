import React from 'react';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from 'react-navigation';

import Home from "../screens/Home";
import Riwayat from "../screens/Riwayat";
import Acount from "../screens/Acount";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Login from '../container/auth/Login';
import { createStackNavigator } from 'react-navigation-stack';


const StackRiwayat = createStackNavigator({
    Riwayat: {
        screen: Riwayat,
    }
}, {
    defaultNavigationOptions: {
        title: 'Riwayat Transaksi',
        headerShown: true,
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
            borderBottomWidth: 0,
            height: 50,
        },
        headerStatusBarHeight: 10
    }
});

const mainTabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <AntDesign name="home" size={27} color={tintColor} />
            ),
            tabBarOptions: { activeTintColor: 'blue' },
            header: null
        }
    },
    Riwayat: {
        screen: StackRiwayat,
        navigationOptions: {
            tabBarLabel: 'Riwayat',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-timer" size={27} color={tintColor} />
            ),
            tabBarOptions: { activeTintColor: 'blue' },
        }
    },
    Akun: {
        screen: Acount,
        navigationOptions: {
            tabBarLabel: 'Profil',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="person-outline" size={27} color={tintColor} />
            ),
            tabBarOptions: { activeTintColor: 'blue' },
            header: null
        }
    }
});

const AuthNav = createSwitchNavigator({
    Auth: {
        screen: Login
    },
    App: {
        screen: mainTabs
    }
});

export default AuthNav;