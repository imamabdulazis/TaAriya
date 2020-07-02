import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { checkSession } from '../redux/actions/authActions';
import { connect } from 'react-redux';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.checkSession();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226' }}>
                <StatusBar backgroundColor={"#fa6226"} barStyle='light-content' />
                <AntDesign name='codepen-circle' size={150} color='#fff' />
                <View style={{ width: '100%', position: 'absolute', bottom: 15, alignItems: 'center' }}>
                    <ActivityIndicator color='#fff' size='large' />
                </View>
            </View>
        );
    }
}

const mapStateTopProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    checkSession: () => dispatch(checkSession()),
})

export default connect(mapStateTopProps, mapDispatchToProps)(SplashScreen);
