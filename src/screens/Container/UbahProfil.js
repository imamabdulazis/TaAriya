import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../components/styles';
import _ from 'lodash';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Spacer from '../../components/common/Spacers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import * as nav from '../../services/nav';
import { connect } from 'react-redux';

const UbahProfil = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView
            // refreshControl={
            //     <RefreshControl onRefresh={this.onRefresh} refreshing={this.state.refreshing} />
            // }
            >
                <View style={{ ...styles.cardShadowWhiteContent, marginHorizontal: 20, borderRadius: 5 }}>
                    <View
                        style={{
                            marginTop: 20,
                            alignItems: 'center', justifyContent: 'center',
                        }}>
                        <View style={styles.imageCardEditProfil}>
                            <ImageBackground
                                style={{ ...styles.imageCardEditProfil, marginRight: 10, overflow: 'hidden' }}
                                source={{ uri: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }}>

                            </ImageBackground>
                        </View>
                        <TouchableOpacity
                            onPress={() => alert('ubah')}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                marginTop: -20,
                                marginLeft: -6,
                                backgroundColor: '#fff',
                                borderRadius: 50,
                                borderWidth: 0.3,
                                borderColor: 'grey'
                            }}>
                            <AntDesign name='upload' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>
                    <Spacer>
                        <Text style={{ color: '#C4C4C4', fontFamily: 'SFProDisplay-Light', fontSize: 12 }}>Nama</Text>
                        <Text style={{ color: '#3A4759', fontFamily: 'SFProDisplay-Light', fontSize: 14 }}>nama</Text>
                    </Spacer>
                    <Spacer />
                    <Spacer>
                        <Text style={{ color: '#C4C4C4', fontFamily: 'SFProDisplay-Light', fontSize: 12 }}>Email</Text>
                        <Text style={{ color: '#3A4759', fontFamily: 'SFProDisplay-Light', fontSize: 14 }}>Email</Text>
                    </Spacer>
                    <Spacer>
                        <Text style={{ color: '#C4C4C4', fontFamily: 'SFProDisplay-Light', fontSize: 12 }}>No. Telepon</Text>
                        <Text style={{ color: '#3A4759', fontFamily: 'SFProDisplay-Light', fontSize: 14 }}>23432423</Text>
                    </Spacer>
                    <Spacer />
                    {
                        props.loginType === 'admin' ?
                            <Spacer>
                                <Text style={{ color: '#C4C4C4', fontFamily: 'SFProDisplay-Light', fontSize: 12 }}>Alamat</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#3A4759', fontFamily: 'SFProDisplay-Light', fontSize: 14 }}>alamt</Text>
                                    <TouchableOpacity onPress={() => { }}>
                                        <SimpleLineIcons name="location-pin" size={25} color={'grey'} />
                                    </TouchableOpacity>
                                </View>
                            </Spacer> : null
                    }
                </View>
            </ScrollView>
        </View >
    );
}

const mapMapstateToProps = (state) => {
    return {
        loginType: state.user.loginType,
    }
}

export default connect(mapMapstateToProps)(UbahProfil);
