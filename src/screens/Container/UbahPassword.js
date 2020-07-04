import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import styles from '../../components/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LargeSpacer from '../../components/common/LargeSpacer';
import SpacerBotTop from '../../components/common/SpacerBotTop';
import { HelperText, TouchableRipple, Divider } from 'react-native-paper';
import textStyles from '../../components/common/typography';
import colors from '../../components/common/Color';


const { width } = Dimensions.get('window');
class UbahPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            cpassword: '',
            cpassword2: '',
            secure: true,
            csecure: false,
            csecure2: false,
        };
    }

    toggleSecure = () => {
        this.setState({ secure: !this.state.secure })
    }

    toggleCSecure = () => {
        this.setState({ csecure: !this.state.csecure })
    }

    toggleCSecure2 = () => {
        this.setState({ csecure2: !this.state.csecure2 })
    }

    render() {
        const { password, cpassword, cpassword2, secure, csecure, csecure2 } = this.state;
        return (
            <View style={styles.container}>
                <LargeSpacer>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="lock" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Konfirmasi Password"
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
                        <HelperText type="info" visible={false} style={{ marginTop: -10 }} />
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="lock" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Konfirmasi Password"
                                style={{ height: 40, width: width / 1.3, marginLeft: 10, ...textStyles.mediumText }}
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
                        <HelperText type="info" visible={false} style={{ marginTop: -10 }} />
                    </SpacerBotTop>
                    <SpacerBotTop>
                        <View style={styles.row}>
                            <SimpleLineIcons name="lock" size={18} color={colors.gray} />
                            <TextInput
                                placeholder="Konfirmasi Password"
                                style={{ height: 40, width: width / 1.3, marginLeft: 10, ...textStyles.mediumText }}
                                autoCapitalize='none'
                                keyboardType='default'
                                secureTextEntry={csecure2}
                                clearButtonMode='while-editing'
                                onChangeText={(text) => this.setState({ cpassword2: text })}
                                value={cpassword2}
                            />
                            <TouchableOpacity onPress={this.toggleCSecure2}>
                                <Ionicons name={csecure2 ? "ios-eye-off" : "ios-eye"} size={23} color={colors.lightgray} />
                            </TouchableOpacity>
                        </View>
                        <Divider />
                        <HelperText type="info" visible={false} style={{ marginTop: -10 }} />
                    </SpacerBotTop>
                    <LargeSpacer />
                    <SpacerBotTop>
                        <TouchableRipple
                            // onPress={this.onSubmitLogin}
                            disabled={password.length === 0 || cpassword.length === 0 || cpassword2.length === 0 ? true : false}
                            style={password.length === 0 || cpassword.length === 0 || cpassword2.length === 0 ? styles.btnContainNeutral : styles.btnContainPrimary}>
                            <Text style={{ ...textStyles.mediumTextSemibold, color: password.length === 0 || cpassword.length === 0 || cpassword2.length === 0 ? colors.gray : colors.white }}>Simpan</Text>
                        </TouchableRipple>
                    </SpacerBotTop>
                </LargeSpacer>
            </View>
        );
    }
}

export default UbahPassword;
