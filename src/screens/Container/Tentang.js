import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../components/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Image } from 'react-native';
import Spacer from '../../components/common/Spacers';
import { DrawerActions } from '@react-navigation/native';

const Tentang = (props) => {
    props.navigation.setOptions({
        headerTitle: "Tentang",
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
                style={{ marginHorizontal: 20 }}>
                <SimpleLineIcons name="menu" size={25} color={'black'} />
            </TouchableOpacity>
        )
    })
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cardShadowNoRadius}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: 0,
                            paddingRight: 0,
                        }}>
                            {/* logo varx */}
                            <View style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50 / 2,
                                borderColor: 'grey', borderWidth: 0.5,
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {/* <Text style={{ color: '#fff', fontFamily: 'SFProDisplay-Bold', fontSize: 25 }}>P</Text > */}
                                <Image
                                    style={{ width: 23, height: 30 }}
                                    source={require('../../assets/img/obeng.png')}
                                />
                            </View>
                            <Spacer />
                            <Spacer />
                            {/* versi */}
                            <View style={{ height: 25 }}>
                                <MaterialCommunityIcons name="alert-circle" size={25} color="grey" />
                            </View>
                            <Spacer />
                            <Spacer />
                            {/* logo changelog */}
                            <View style={{ height: 25 }}>
                                <MaterialCommunityIcons name="update" size={25} color="grey" />
                            </View>
                            <Spacer />
                            <Spacer />
                            {/* license */}
                            <View style={{ height: 25 }}>
                                <Entypo name="save" size={25} color="grey" />
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginLeft: 20
                        }}>
                            <TouchableOpacity style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                paddingLeft: 0,
                                paddingRight: 0,
                                height: 50
                            }}>
                                <Text style={{ color: '#3B485A', fontFamily: 'SFProDisplay-Bold', fontSize: 14 }}>Bengkelta</Text>
                                <Text style={{ color: 'grey', fontFamily: 'SFProDisplay-Medium', fontSize: 14 }}>@ariiya</Text>
                            </TouchableOpacity>
                            <Spacer></Spacer>
                            <TouchableOpacity
                                onPress={() => alert('Version')}
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    height: 48,
                                }}>
                                <Text style={{ color: '#3B485A', fontFamily: 'SFProDisplay-Medium', fontSize: 14 }}>Version</Text>
                                <Text style={{ color: 'grey', fontFamily: 'SFProDisplay-Medium', fontSize: 14 }}>1</Text>
                            </TouchableOpacity>
                            <Spacer></Spacer>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    height: 19,
                                }}>
                                <Text style={{ color: '#3B485A', fontFamily: 'SFProDisplay-Medium', fontSize: 14 }}>Changelog</Text>
                            </TouchableOpacity>
                            <Spacer></Spacer>
                            <View style={{ marginBottom: 5 }}></View>
                            <TouchableOpacity
                                onPress={() => alert('test')}
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    height: 40,
                                }}>
                                <Text style={{ color: '#3B485A', fontFamily: 'SFProDisplay-Medium', fontSize: 14 }}>License</Text>
                            </TouchableOpacity>
                            <View style={{ marginBottom: 5 }}></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Tentang;
