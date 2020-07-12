import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import styles from '../components/styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LargeSpacer from '../components/common/LargeSpacer';
import SpacerBotTop from '../components/common/SpacerBotTop';
import colors from '../components/common/Color';
import textStyles from '../components/common/typography';
import { Divider, TouchableRipple, HelperText } from 'react-native-paper';
import Spacer from '../components/common/Spacers';
import { SafeAreaView } from 'react-native';
import * as nav from '../services/nav';

const { width } = Dimensions.get('window');

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secure: true,
            csecure: true,
            nama: '',
            username: '',
            email: '',
            alamat: '',
            telepon: '',
            password: '',
            cpassword: '',
            validatePass: false,
            messagePass: false
        };
        this.props.navigation.setOptions({
            headerTitle: "Daftar"
        })
    }

    toggleSecure = () => {
        this.setState({ secure: !this.state.secure })
    }
    toggleCSecure = () => {
        this.setState({ csecure: !this.state.csecure })
    }

    handleRegister = () => {
        if (this.state.password.length < 6 || this.state.cpassword.length < 6) {
            this.setState({ validatePass: true, messagePass: "Password minimal 6 karakter!" })
        } else if (this.state.password !== this.state.cpassword) {
            this.setState({ validatePass: true, messagePass: "Password tidak sama!" })
        } else {
            this.setState({ validatePass: false })
        }
    }

    render() {
        const { secure, csecure, nama, username, email, alamat, telepon, password, cpassword, validatePass, messagePass } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <LargeSpacer>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="user" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Nama"
                                style={{ height: 40, width: width / 1.2, marginLeft: 10, ...textStyles.mediumText }}
                                autoCapitalize='none'
                                keyboardType='default'
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ nama: text })}
                                value={nama}
                            />
                        </View>
                        <Divider />
                        <HelperText type="info" visible={false} style={{ marginTop: -10 }} />
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="user" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Username"
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
                            <SimpleLineIcons name="envelope" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Email"
                                style={{ height: 40, width: width / 1.2, marginLeft: 10, ...textStyles.mediumText }}
                                autoCapitalize='none'
                                keyboardType='default'
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ email: text })}
                                value={email}
                            />
                        </View>
                        <Divider />
                    </SpacerBotTop>
                    <HelperText type="info" visible={email.length === 0 ? true : false} style={{ marginTop: -15, marginLeft: 20 }}>
                        email ini digunakan untuk login.
                    </HelperText>
                    <SpacerBotTop>
                        <View style={{ ...styles.row, marginTop: -5 }}>
                            <SimpleLineIcons name="compass" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Alamat"
                                style={{
                                    height: 40, width: width / 1.3, marginLeft: 10, ...textStyles.mediumText
                                }}
                                autoCapitalize='none'
                                keyboardType='default'
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ alamat: text })}
                                value={alamat}
                            />
                            <TouchableOpacity onPress={() => nav.navigate('mapsAuthScreen', {
                                title: "Pilih Alamat"
                            })}>
                                <SimpleLineIcons name="location-pin" size={25} color={colors.gray} />
                            </TouchableOpacity>
                        </View>
                        <Divider />
                        <HelperText type="info" visible={false} style={{ marginTop: -10 }} />
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="phone" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Nomor Telepon"
                                style={{ height: 40, width: width / 1.2, marginLeft: 10, ...textStyles.mediumText }}
                                autoCapitalize='none'
                                keyboardType='default'
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ telepon: text })}
                                value={telepon}
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
                                style={{
                                    height: 40, width: width / 1.3, marginLeft: 10, ...textStyles.mediumText
                                }}
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
                        <HelperText type="info" visible={false} style={{ marginTop: -10 }} />
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="lock" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Konfirmasi Password"
                                style={{
                                    height: 40, width: width / 1.3, marginLeft: 10, ...textStyles.mediumText
                                }}
                                autoCapitalize='none'
                                keyboardType='default'
                                secureTextEntry={csecure}
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ cpassword: text })}
                                value={cpassword}
                            />
                            <TouchableOpacity onPress={this.toggleCSecure}>
                                <Ionicons name={csecure ? "ios-eye-off" : "ios-eye"} size={23} color={colors.lightgray} />
                            </TouchableOpacity>
                        </View>
                        <Divider />
                    </SpacerBotTop>
                    <HelperText type="error" visible={validatePass} style={{ marginTop: -15, marginLeft: 20 }}>
                        {messagePass}
                    </HelperText>
                    <Spacer />
                    <SpacerBotTop>
                        <TouchableRipple
                            onPress={this.handleRegister}
                            disabled={nama.length === 0 || username.length === 0 || email.length === 0 || alamat.length === 0 || telepon.length === 0 || password.length === 0 || cpassword.length === 0 ? true : false}
                            style={nama.length === 0 || username.length === 0 || email.length === 0 || alamat.length === 0 || telepon.length === 0 || password.length === 0 || cpassword === 0 ? styles.btnContainNeutral : styles.btnContainPrimary}>
                            <Text style={{ ...textStyles.mediumTextSemibold, color: nama.length === 0 || username.length === 0 || email.length === 0 || alamat.length === 0 || telepon.length === 0 || password.length === 0 || cpassword === 0 ? colors.gray : colors.white }}>Daftar</Text>
                        </TouchableRipple>
                    </SpacerBotTop>
                </LargeSpacer>
            </SafeAreaView >
        );
    }
}

export default Register;
