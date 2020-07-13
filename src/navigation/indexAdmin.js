import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Admin/Dashboard/Dashboard';
import Notifikasi from '../screens/Admin/Notifikasi/Notifikasi';
import Chat from '../screens/Admin/Chat/Chat';
import Product from '../screens/Admin/Product/Product';
import DrawerContent from './drawerContent';
import Laporan from '../screens/Admin/Laporan/Laporan';
import Pengguna from '../screens/Admin/Pengguna/Pengguna';
import Profil from '../screens/Admin/Profil/Profil';
import Tentang from '../screens/Container/Tentang';
import ProdukTabs from './ProdukTabs';
import PesananServis from '../screens/Admin/PesananServis/PesananServis';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainDashboard" component={Dashboard} />
        </Stack.Navigator>
    )
}

const PesananStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainPesanan" component={PesananServis} />
        </Stack.Navigator>
    )
}

const NotifikasiStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainNotifikasi" component={Notifikasi} />
        </Stack.Navigator>
    )
}

const ChatStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainChat" component={Chat} />
        </Stack.Navigator>
    )
}

const ProdukStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
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
            <Stack.Screen name="mainProduk" component={ProdukTabs} />
        </Stack.Navigator>
    )
}

const LaporanStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainLaporan" component={Laporan} />
        </Stack.Navigator>
    )
}

const PenggunaStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainPengguna" component={Pengguna} />
        </Stack.Navigator>
    )
}
const ProfilStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainProfil" component={Profil} />
        </Stack.Navigator>
    )
}
const TentangStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mainTentang" component={Tentang} />
        </Stack.Navigator>
    )
}


const MainDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="dashbardStack" component={DashboardStack} />
            <Drawer.Screen name="notifikasiStack" component={NotifikasiStack} />
            <Drawer.Screen name="pesananStack" component={PesananStack} />
            <Drawer.Screen name="chatStack" component={ChatStack} />
            <Drawer.Screen name="produkStack" component={ProdukStack} />

            <Drawer.Screen name="laporanStack" component={LaporanStack} />
            <Drawer.Screen name="penggunaStack" component={PenggunaStack} />

            <Drawer.Screen name="profilStack" component={ProfilStack} />
            <Drawer.Screen name="tentangStack" component={TentangStack} />

        </Drawer.Navigator>
    )
}

export default MainDrawer;