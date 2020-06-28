import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    Appbar,
    Drawer,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../components/styles';


function DrawerContent() {
    return (
        <DrawerContentScrollView
            style={{ height: '100%', borderLeftWidth: 0.5, borderLeftColor: "grey", }}>
            <View
                style={styles.drawerContent}>
                <Drawer.Section>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="user"
                                color={'orange'}
                                size={22}
                                style={{ paddingLeft: 2.5 }}
                            />
                            <Text style={styles.menuTitleStyle}>Booking</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="lock"
                                color={"orange"}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Servis</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="settings"
                                color={"orange"}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Transaksi</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="settings"
                                color={"orange"}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Riwayat</Text>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>


                <Drawer.Section
                    title="Lainnya">
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuDrawer}>
                            <Ionicons
                                name="ios-information-circle-outline"
                                color={"orange"}
                                size={30}
                            />
                            <Text style={styles.menuTitleStyle}>Tentang</Text>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;