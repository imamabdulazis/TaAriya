import React from 'react';

import Home from "../screens/Home";
import Riwayat from "../screens/Riwayat";
import Acount from "../screens/Acount";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cari from '../screens/Container/Cari';
import { View, Text, TouchableOpacity } from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import Pengaturan from '../screens/Container/Pengaturan';
import Login from '../screens/Login';
import { navigationRef } from '../services/nav';
import { connect } from 'react-redux';
import Tentang from '../screens/Container/Tentang';
import UbahProfil from '../screens/Container/UbahProfil';
import UbahPassword from '../screens/Container/UbahPassword';
import Alamat from '../screens/Container/Alamat';
import Register from '../screens/Register';
import Servis from '../screens/Servis';
import Transaksi from '../screens/Container/Transaksi';
import Maps from '../components/app/Maps';
import SemuaArtikel from '../screens/Container/SemuaArtikel';
import DetailServis from '../screens/Container/DetailServis';


const Stack = createStackNavigator();
const TAB = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AUTH = () => {
    return (
        <Stack.Navigator screenOptions={{
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
            },
        }}>
            <Stack.Screen name='loginScreen' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='registerScreen' component={Register} />
            <Stack.Screen name='mapsAuthScreen' component={Maps} />
        </Stack.Navigator>
    )
}

const HOME = ({ navigation, route }) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: '#000',
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
                },
            }}>
            <Stack.Screen name='homeScreen' component={Home} />
            <Stack.Screen name="cari" component={Cari} />
            <Stack.Screen name="pengaturan" component={Pengaturan} />
            <Stack.Screen name="semuaArtikel" component={SemuaArtikel} />
        </Stack.Navigator>
    )
}

const SERVIS = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerTintColor: '#000' }}>
            <Stack.Screen name='servisScreen' component={Servis}
                options={{
                    headerTitle: 'Servis',
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
                    },
                }} />
            <Stack.Screen name="detailServis" component={DetailServis} options={{ headerTitle: "Detail Servis" }} />
        </Stack.Navigator>
    )
}



const RIWAYAT = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerTintColor: '#000' }}>
            <Stack.Screen name='riwayatScreen' component={Riwayat}
                options={{
                    headerTitle: 'Riwayat',
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
                    },
                }} />
        </Stack.Navigator>
    )
}

const CARI = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: '#000',
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
            },
        }}>
            <Stack.Screen name='cariScreen' component={Cari} options={{ headerTitle: 'Cari' }} />
        </Stack.Navigator>
    )
}

const AKUN = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTintColor: '#000', headerBackTitleVisible: false }}>
            <Stack.Screen name='akunScreen' component={Acount} options={{ headerTitle: 'Akun' }} />
            <Stack.Screen name='pengaturanScreen' component={Pengaturan} options={{ headerTitle: 'Akun' }} />
            <Stack.Screen name='ubahProfil' component={UbahProfil} options={{ headerTitle: 'Edit Profil' }} />
            <Stack.Screen name='alamat' component={Alamat} options={{ headerTitle: 'Alamat' }} />
            <Stack.Screen name='ubahPassword' component={UbahPassword} options={{ headerTitle: 'Edit Password' }} />
            <Stack.Screen name='tentang' component={Tentang} options={{ headerTitle: 'Tentang Aplikasi' }} />

            <Stack.Screen name='mapsAkun' component={Maps} options={{ headerTitle: 'Tentang Aplikasi' }} />

        </Stack.Navigator>
    )
}

const APPTAB = ({ navigation, route }) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ gestureEnabled: false })
    } else {
        navigation.setOptions({ gestureEnabled: true })
    }
    return (
        <TAB.Navigator
            tabBarOptions={{
                activeTintColor: '#fa6226',
                keyboardHidesTabBar: true,
                tabStyle: {
                    backgroundColor: '#fff'
                }
            }}>
            <TAB.Screen
                name='Home'
                component={HOME}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <MaterialCommunityIcons name='home' size={30} color='#fa6226' />
                            : <MaterialCommunityIcons name="home-outline" size={29} color='grey' />
                    ),
                }} />
            <TAB.Screen
                name='Servis'
                component={SERVIS}
                options={{
                    tabBarLabel: 'Servis',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <MaterialCommunityIcons name="cog-sync" size={29} color='#fa6226' />
                            : <MaterialCommunityIcons name='cog-outline' size={30} color='grey' />
                    ),
                }} />
            <TAB.Screen
                name='Riwayat'
                component={RIWAYAT}
                options={{
                    tabBarLabel: 'Riwayat',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <MaterialCommunityIcons name='clock-time-five' size={30} color='#fa6226' />
                            : <MaterialCommunityIcons name="clock-time-five-outline" size={29} color='grey' />
                    ),
                }} />
            <TAB.Screen
                name='Akun'
                component={AKUN}
                options={{
                    tabBarLabel: 'Akun',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <MaterialCommunityIcons name='account-circle' size={30} color='#fa6226' />
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
        const { token } = this.props;
        if (this.state.splash) {
            return <SplashScreen />
        }
        return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName='mainApp'>
                    {
                        token === undefined
                            ? <Stack.Screen name='authApp' component={AUTH} />
                            : <Stack.Screen name='mainApp' component={APPTAB} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MAINAPP);
