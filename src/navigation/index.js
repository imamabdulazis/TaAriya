import React from 'react';

import Home from "../screens/Home";
import Riwayat from "../screens/Riwayat";
import Acount from "../screens/Acount";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../container/auth/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cari from '../screens/Cari';
import { View, Text, TouchableOpacity } from 'react-native';
import SplashScreen from '../screens/SplashScreen';


const Stack = createStackNavigator();
const TAB = createBottomTabNavigator();


const AUTH = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='loginScreen' component={Login} />
        </Stack.Navigator>
    )
}

const HOME = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='homeScreen' component={Home} options={{
                headerTitle: 'Dashboad',
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ marginLeft: 15 }}>
                        <AntDesign name='codepen-circle' size={30} color='red' />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ marginRight: 15 }}>
                        <Ionicons name="ios-notifications-outline" size={30} color='red' />
                    </TouchableOpacity>
                )
            }} />
        </Stack.Navigator>
    )
}

const RIWAYAT = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='riwayatSceen' component={Riwayat} options={{ headerTitle: 'Riwayat' }} />
        </Stack.Navigator>
    )
}

const CARI = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='cariScreen' component={Cari} options={{ headerTitle: 'Cari' }} />
        </Stack.Navigator>
    )
}

const AKUN = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='akunScreen' component={Acount} options={{ headerTitle: 'Akun' }} />
        </Stack.Navigator>
    )
}

const APPTAB = () => {
    return (
        <TAB.Navigator
            tabBarOptions={{
                activeTintColor: 'red',
                keyboardHidesTabBar: true,
            }}>
            <TAB.Screen
                name='Home'
                component={HOME}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <MaterialCommunityIcons name='home' size={30} color='red' />
                            : <MaterialCommunityIcons name="home-outline" size={29} color='grey' />
                    ),
                }} />
            <TAB.Screen
                name='Riwayat'
                component={RIWAYAT}
                options={{
                    tabBarLabel: 'Riwayat',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Ionicons name='ios-time' size={30} color='red' />
                            : <Ionicons name="md-time" size={29} color='grey' />
                    ),
                }} />
            <TAB.Screen
                name='Cari'
                component={CARI}
                options={{
                    tabBarLabel: 'Cari',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Feather name='search' size={29} color='red' />
                            : <Feather name="search" size={29} color='grey' />
                    ),
                }} />
            <TAB.Screen
                name='Akun'
                component={AKUN}
                options={{
                    tabBarLabel: 'Akun',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <MaterialCommunityIcons name='account-circle' size={30} color='red' />
                            : <MaterialCommunityIcons name="account-circle-outline" size={29} color='grey' />
                    ),
                }} />
        </TAB.Navigator >
    )
}

class MAINAPP extends React.Component {
    state = {
        splash: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ splash: false }) }, 1500)
    }
    render() {
        if (this.state.splash) {
            return <SplashScreen />
        }
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName='mainApp'>
                    <Stack.Screen name='mainApp' component={APPTAB} />
                    <Stack.Screen name='authApp' component={AUTH} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default MAINAPP;
