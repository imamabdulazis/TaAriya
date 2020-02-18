import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';
import styles from '../../components/styles';
import { TextInput } from 'react-native-gesture-handler';
import Spacer from '../../components/common/Spacers';
import Loader from '../../components/common/Loader';

const { width, height } = Dimensions.get('screen');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false,
        };
    }

    onSubmitLogin = () => {
        this.setState({
            isLoading: true,
        })
        if (this.state.username == 'ariya' && this.state.password == '123') {
            setTimeout(() => {
                this.props.navigation.navigate('App');
            }, 1500);
        } else {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                });
                Alert.alert('Gagal', 'Username atau password salah.');
            }, 1500)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {(this.state.isLoading) && <Loader />}
                <StatusBar translucent />
                <ImageBackground
                    style={{ ...styles.container, justifyContent: 'center', alignItems: 'center' }}
                    source={require('../../assets/bg.jpeg')}>
                    <Text style={{ fontSize: 50, fontWeight: '900', color: '#fff' }}>Bengkel Ariya</Text>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <TextInput
                        style={{
                            padding: 10, backgroundColor: 'transparent', width: width - 40,
                            borderRadius: 10, fontSize: 14, borderColor: '#fff', borderWidth: 1,
                            color: '#fff'
                        }}
                        placeholder='username'
                        placeholderTextColor='#fff'
                        value={this.state.username}
                        onChangeText={(user) => this.setState({ username: user })}
                    />
                    <Spacer />
                    <TextInput
                        style={{
                            padding: 10, backgroundColor: 'transparent', width: width - 40,
                            borderRadius: 10, fontSize: 14, borderColor: '#fff', borderWidth: 1,
                            color: '#fff'
                        }}
                        placeholder='password'
                        placeholderTextColor='#fff'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={(pass) => this.setState({ password: pass })}
                    />
                    <Spacer />
                    <Spacer />
                    <TouchableOpacity
                        onPress={this.onSubmitLogin}
                        style={{ backgroundColor: '#fff', width: width - 40, borderRadius: 10, fontSize: 14 }}>
                        <Text style={{ padding: 10, backgroundColor: '#fff', width: width - 40, borderRadius: 10, fontSize: 14, textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}


export default Login;
