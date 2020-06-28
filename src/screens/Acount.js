import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, Dimensions } from 'react-native'
import styles from '../components/styles'
import Spacer from '../components/common/Spacers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';
import { ListItem } from 'react-native-elements';

const { width, height } = Dimensions.get('screen')

export class Acount extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.props.navigation.setOptions({
            headerShown: false
        })
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Spacer>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>Profil</Text>
                        <TouchableRipple onPress={() => { }}>
                            <MaterialIcons name="more-vert" size={30} color="grey" />
                        </TouchableRipple>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }}
                            style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2 }}
                        />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Imam Abdul Azis</Text>
                            <Text style={{ fontSize: 16, fontWeight: '300' }}>imamabdulazis@gmail.com</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, marginVertical: 10 }}>Akun</Text>
                    <TouchableRipple onPress={() => { }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="person" size={20} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300' }}>Ubah Profil</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="pin-drop" size={20} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300' }}>Alamat</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>

                    <Text style={{ fontSize: 20, fontWeight: '400', marginVertical: 10 }}>Kemanan</Text>
                    <TouchableRipple onPress={() => { }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="lock" size={17} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300' }}>Ubah Kata Sandi</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>

                    <Text style={{ fontSize: 20, fontWeight: '400', marginVertical: 10 }}>Tentang</Text>
                    <TouchableRipple onPress={() => { }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="info" size={20} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300' }}>Tentang Aplikasi</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>
                </Spacer>
            </SafeAreaView>
        )
    }
}

export default Acount
