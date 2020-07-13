import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Product from '../screens/Admin/Product/Product';
import { TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerActions } from '@react-navigation/native';

const Tabs = createMaterialTopTabNavigator();

const ProdukTabs = (props) => {
    props.navigation.setOptions({
        headerTitle: "Produk",
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
                style={{ marginHorizontal: 20 }}>
                <SimpleLineIcons name="menu" size={25} color={'black'} />
            </TouchableOpacity>
        )
    })
    return (
        <Tabs.Navigator
            lazy={true}
            swipeEnabled={true}
            tabBarOptions={{
                scrollEnabled: true
            }}
            screenOptions={{

            }}>
            <Tabs.Screen name="mainProduk" component={Product} options={{ title: "OLI" }} />
            <Tabs.Screen name="lainProduk" component={Product} options={{ title: "Onderdil" }} />
            <Tabs.Screen name="lainnyaProduk" component={Product} options={{ title: "Body" }} />
            <Tabs.Screen name="lainnya2Produk" component={Product} options={{ title: "Aksesoris" }} />
            <Tabs.Screen name="lainnya3Produk" component={Product} options={{ title: "Modifikasi" }} />
        </Tabs.Navigator>
    )
}

export default ProdukTabs;