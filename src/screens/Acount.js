import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../components/styles'
import * as nav from '../services/nav';
import colors from '../components/common/Color'
import Spacer from '../components/common/Spacers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple, Menu, Divider, Provider } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import { logout } from '../redux/actions/userActions';
import { connect } from 'react-redux';
import LargeSpacer from '../components/common/LargeSpacer';
import Loader from '../components/common/Loader';
import Modal from 'react-native-modal';
import textStyles from '../components/common/typography';
import SpacerBotTop from '../components/common/SpacerBotTop';

const { width, height } = Dimensions.get('screen')

export class Acount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            dialog: false
        }
        this.props.navigation.setOptions({
            headerShown: false,
        })
    }

    closeMenu = () => {
        this.setState({ visible: false })
    }
    openMenu = () => {
        this.setState({ visible: true })
    }

    toggleDialog = () => {
        this.setState({ dialog: !this.state.dialog })
    }

    render() {
        const { visible, dialog } = this.state;
        return (
            <Provider>
                <SafeAreaView style={styles.container}>
                    {(this.props.loading) && <Loader title="Keluar..." />}
                    <Spacer />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 24, fontWeight: '500', marginLeft: 20 }}>Profil</Text>
                        <Menu
                            visible={visible}
                            onDismiss={this.closeMenu}
                            anchor={
                                <TouchableOpacity style={{ padding: 5, marginRight: 10 }} onPress={this.openMenu}>
                                    <MaterialIcons name="more-vert" size={30} color="grey" />
                                </TouchableOpacity>
                            }>
                            <Menu.Item onPress={() => nav.navigate('pengaturanScreen')} title="Pengaturan" />
                            <Divider />
                            <Menu.Item onPress={this.toggleDialog} title="Keluar" />
                        </Menu>
                    </View>
                    <Spacer>
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
                    </Spacer>
                    <Spacer>
                        <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, marginVertical: 10 }}>Akun</Text>
                    </Spacer>
                    <TouchableRipple style={{ paddingHorizontal: 20 }} onPress={() => nav.navigate('ubahProfil')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="person" size={20} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>Ubah Profil</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>
                    <TouchableRipple style={{ paddingHorizontal: 20 }} onPress={() => nav.navigate('alamat')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="pin-drop" size={20} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>Alamat</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>

                    <Spacer>
                        <Text style={{ fontSize: 20, fontWeight: '400', marginVertical: 10 }}>Kemanan</Text>
                    </Spacer>
                    <TouchableRipple style={{ paddingHorizontal: 20 }} onPress={() => nav.navigate('ubahPassword')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="lock" size={17} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>Ubah Kata Sandi</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>

                    <Spacer>
                        <Text style={{ fontSize: 20, fontWeight: '400', marginVertical: 10 }}>Tentang</Text>
                    </Spacer>
                    <TouchableRipple style={{ paddingHorizontal: 20 }} onPress={() => nav.navigate('tentang')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="info" size={20} color="grey" />
                                <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>Tentang Aplikasi</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="grey" />
                        </View>
                    </TouchableRipple>
                    <Modal
                        isVisible={dialog}
                        onBackdropPress={this.toggleDialog}
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: width / 1.5, backgroundColor: colors.white, borderRadius: 10, padding: 10 }}>
                            <Text style={textStyles.largeTextSemibold}>Konfirmasi Keluar</Text>
                            <SpacerBotTop>
                                <Text style={textStyles.mediumText}>Anda ingin keluar bengkelku?</Text>
                            </SpacerBotTop>
                            <SpacerBotTop />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={this.toggleDialog}>
                                    <Text>Batal</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.logout()}>
                                    <Text style={{ ...textStyles.mediumTextSemibold, color: 'red' }}>Keluar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.user.loading,
    token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Acount)
