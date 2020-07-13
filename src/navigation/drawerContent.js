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
    Divider,
} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as nav from '../services/nav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles, { screenWidth } from '../components/styles';
import colors from '../components/common/Color';
import { Image } from 'react-native';
import textStyles from '../components/common/typography';
import SpacerSmall from '../components/common/SpacerSmall';
import { store } from '../redux/store/store';
import { logout } from '../redux/actions/userActions';


function DrawerContent() {
    return (
        <DrawerContentScrollView
            style={{ height: '100%', borderLeftWidth: 0.5, borderLeftColor: colors.gray, }}>
            <View
                style={styles.drawerContent}>
                <View style={styles.menuDrawer}>
                    <View style={styles.divRowStart}>
                        <Image
                            source={{ uri: "https://lh3.googleusercontent.com/ogw/ADGmqu-i4FvvGJClKfZCa4PKwSVrwxnFfAbiUgr18k2S=s32-c-mo" }}
                            style={{ width: screenWidth / 7.5, height: screenWidth / 7.5, borderRadius: (screenWidth / 7.5) / 2 }}
                        />
                        <SpacerSmall />
                        <Text numberOfLines={1} style={{ ...textStyles.mediumTextSemibold, width: screenWidth / 3.5 }}>Ariya sdfsd sdfsdf dsfsdf</Text>
                    </View>
                </View>
                <Drawer.Section>
                    <TouchableRipple onPress={() => nav.navigate('dashbardStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="chart"
                                color={colors.black}
                                size={22}
                                style={{ paddingLeft: 2.5 }}
                            />
                            <Text style={styles.menuTitleStyle}>Dashbaord</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => nav.navigate('notifikasiStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="bell"
                                color={colors.black}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Notifikasi</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => nav.navigate('chatStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="speech"
                                color={colors.black}
                                size={24}
                            />
                            <Text style={styles.menuTitleStyle}>Chat</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => nav.navigate('produkStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="grid"
                                color={colors.black}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Produk</Text>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>

                <Drawer.Section
                    title="Data">
                    <TouchableRipple onPress={() => nav.navigate('laporanStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="doc"
                                color={colors.black}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Laporan</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => nav.navigate('penggunaStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="people"
                                color={colors.black}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Pelanggan</Text>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>

                <Drawer.Section
                    title="Lainnya">
                    <TouchableRipple onPress={() => nav.navigate('profilStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="emotsmile"
                                color={colors.black}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Profil</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => nav.navigate('tentangStack')}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="info"
                                color={colors.black}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Tentang</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => store.dispatch(logout())}>
                        <View style={styles.menuDrawer}>
                            <SimpleLineIcons
                                name="logout"
                                color={colors.black}
                                size={25}
                            />
                            <Text style={styles.menuTitleStyle}>Log Out</Text>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;