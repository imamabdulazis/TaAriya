import React, { Component } from 'react';
import {
    View, Text, ImageBackground, StatusBar, Dimensions, Button, TouchableOpacity,
    Alert, SafeAreaView, TextInput, Image
} from 'react-native';
import { login } from '../redux/actions/userActions';
import * as nav from '../services/nav';
import { RNToasty } from 'react-native-toasty'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spacer from '../components/common/Spacers';
import styles, { screenWidth } from '../components/styles';
import LargeSpacer from '../components/common/LargeSpacer';
import SpacerBotTop from '../components/common/SpacerBotTop';
import colors from '../components/common/Color';
import textStyles from '../components/common/typography';
import { Divider, TouchableRipple, HelperText } from 'react-native-paper';
import { connect } from 'react-redux';
import Loader from '../components/common/Loader';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('screen');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            secure: true,
            dialog: false,
        };
    }

    onSubmitLogin = () => {
        this.props.login(this.state.username, this.state.password);
    }

    toggleSecure = () => {
        this.setState({ secure: !this.state.secure });
    }

    toggleDialog = () => {
        this.setState({ dialog: !this.state.dialog })
    }

    goAdmin = () => {
        this.toggleDialog();
        nav.navigate('registerAdminScreen')
    }

    goUser = () => {
        this.toggleDialog()
        nav.navigate('registerScreen')
    }

    render() {
        const { username, password, secure } = this.state;
        const { loading } = this.props;
        return (
            <View style={{
                ...styles.container, justifyContent: 'center',
                alignItems: 'center', backgroundColor: '#fff'
            }}>
                {(loading) && <Loader title="Loging In" />}
                <StatusBar translucent />
                <SpacerBotTop>
                    <Image
                        source={require('../assets/img/obeng.png')}
                        style={{ width: 150, height: 150 }}
                    />
                </SpacerBotTop>
                <LargeSpacer />
                <LargeSpacer>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="user" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Email"
                                style={{ height: 40, width: width / 1.2, marginLeft: 10, ...textStyles.mediumText }}
                                autoCapitalize='none'
                                keyboardType='default'
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ username: text })}
                                value={username}
                            />
                        </View>
                        <Divider />
                        <HelperText type="info" visible={false} style={{ marginTop: -10 }} />
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="lock" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Password"
                                style={{ height: 40, width: width / 1.3, marginLeft: 10, ...textStyles.mediumText }}
                                autoCapitalize='none'
                                keyboardType='default'
                                secureTextEntry={secure}
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ password: text })}
                                value={password}
                            />
                            <TouchableOpacity onPress={this.toggleSecure}>
                                <Ionicons name={secure ? "ios-eye-off" : "ios-eye"} size={23} color={colors.lightgray} />
                            </TouchableOpacity>
                        </View>
                        <Divider />
                    </SpacerBotTop>
                    <LargeSpacer />
                    <SpacerBotTop>
                        <TouchableRipple
                            onPress={this.onSubmitLogin}
                            disabled={username.length === 0 || password.length == 0 ? true : false}
                            style={username.length === 0 || password.length == 0 ? styles.btnContainNeutral : styles.btnContainPrimary}>
                            <Text style={{ ...textStyles.mediumTextSemibold, color: username.length === 0 || password.length == 0 ? colors.gray : colors.white }}>Log In</Text>
                        </TouchableRipple>
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.rowBetweenCenter}>
                            <TouchableOpacity onPress={this.toggleDialog}>
                                <Text style={{ ...textStyles.mediumTextSemibold, color: colors.pink }}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                    </SpacerBotTop>
                </LargeSpacer>

                <Modal
                    isVisible={this.state.dialog}
                    onBackdropPress={this.toggleDialog}
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: screenWidth / 1.5, backgroundColor: colors.white, borderRadius: 10, padding: 10 }}>
                        <Text style={textStyles.largeTextSemibold}>Konfirmasi Daftar</Text>
                        <SpacerBotTop>
                            <Text style={textStyles.mediumText}>Anda ingin mendaftar sebagai?</Text>
                        </SpacerBotTop>
                        <SpacerBotTop />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={this.goAdmin}>
                                <Text style={{ ...textStyles.mediumTextSemibold }}>Bengkel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goUser}>
                                <Text style={{ ...textStyles.mediumTextSemibold }}>Pengguna</Text>
                            </TouchableOpacity>
                        </View>
                        <Spacer/>
                    </View>
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.user.loading,
})

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
