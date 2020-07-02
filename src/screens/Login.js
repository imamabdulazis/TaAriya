import React, { Component } from 'react';
import {
    View, Text, ImageBackground, StatusBar, Dimensions, Button, TouchableOpacity,
    Alert, SafeAreaView, TextInput,
} from 'react-native';
import { login } from '../redux/actions/authActions';
import * as nav from '../services/nav';
import { RNToasty } from 'react-native-toasty'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spacer from '../components/common/Spacers';
import styles from '../components/styles';
import LargeSpacer from '../components/common/LargeSpacer';
import SpacerBotTop from '../components/common/SpacerBotTop';
import colors from '../components/common/Color';
import textStyles from '../components/common/typography';
import { Divider, TouchableRipple } from 'react-native-paper';
import { connect } from 'react-redux';
import Loader from '../components/common/Loader';

const { width, height } = Dimensions.get('screen');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            secure: true,
        };
    }

    onSubmitLogin = () => {
        this.props.login(this.state.username, this.state.password);
    }

    toggleSecure = () => {
        this.setState({ secure: !this.state.secure });
    }

    render() {
        const { username, password, secure } = this.state;
        const { loading } = this.props;
        return (
            <SafeAreaView style={{ ...styles.container, justifyContent: 'center', alignItems: 'center' }}>
                {(loading) && <Loader title="Loging In" />}
                <StatusBar translucent />
                <LargeSpacer>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="user" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="No.Handphone/Email/Username"
                                style={{ height: 40, width: width / 1.2, marginLeft: 10, ...textStyles.mediumText }}
                                autoCapitalize='none'
                                keyboardType='default'
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ username: text })}
                                value={username}
                            />
                        </View>
                        <Divider />
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="lock" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Password"
                                style={{ height: 40, width: width / 1.6, marginLeft: 10, ...textStyles.mediumText }}
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
                            <View style={{ width: 1, marginHorizontal: 10, height: 20, backgroundColor: colors.lightgray }} />
                            <TouchableOpacity onPress={() => { }}>
                                <Text style={{ ...textStyles.mediumText, color: colors.pink }}>Lupa?</Text>
                            </TouchableOpacity>
                        </View>
                        <Divider />
                    </SpacerBotTop>
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
                            <TouchableOpacity onPress={() => { }}>
                                <Text style={{ ...textStyles.mediumText, color: colors.pink }}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                    </SpacerBotTop>
                </LargeSpacer>
            </SafeAreaView >

        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
})

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
