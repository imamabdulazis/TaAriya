import React, { Component } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import styles, { screenWidth } from '../../../components/styles';
import { ActivityIndicator } from 'react-native';
import colors from '../../../components/common/Color';
import Spacer from '../../../components/common/Spacers';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle: "Dashboard",
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={{ marginHorizontal: 20 }}>
                    <SimpleLineIcons name="menu" size={25} color={'black'} />
                </TouchableOpacity>
            )
        })
        this.state = {
            loadingscreen: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loadingscreen: false })
        }, 1500);
    }

    _renderCardStatistik = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.cardShadowWhiteHalfWidth}>
                        <View style={{ width: screenWidth / 2.3, flexDirection: 'row' }}>
                            <View style={{ height: 50, width: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: colors.orange }} />
                            <View style={{ paddingHorizontal: 15 }}>
                                <SimpleLineIcons name="pie-chart" size={30} color={colors.orange} />
                                <Text style={{ fontFamily: 'SFProDisplay-Semibold', marginLeft: 5, fontSize: 20, color: colors.black }}>20</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Bold', marginLeft: 5, fontSize: 14, color: colors.gray }}>Servis</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardShadowWhiteHalfWidth}>
                        <View style={{ width: screenWidth / 2.3, flexDirection: 'row' }}>
                            <View style={{ height: 50, width: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'green' }} />
                            <View style={{ paddingHorizontal: 15 }}>
                                <SimpleLineIcons name="people" size={30} color={'green'} />
                                <Text style={{ fontFamily: 'SFProDisplay-Semibold', marginLeft: 5, fontSize: 20, color: colors.black }}>10</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Bold', marginLeft: 5, fontSize: 14, color: colors.gray }}>Pelanggan</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <Spacer />
                <Spacer />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.cardShadowWhiteHalfWidth}>
                        <View style={{ width: screenWidth / 2.3, flexDirection: 'row' }}>
                            <View style={{ height: 50, width: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: colors.ypsLight }} />
                            <View style={{ paddingHorizontal: 15 }}>
                                <SimpleLineIcons name="user-unfollow" size={30} color={colors.ypsLight} />
                                <Text style={{ fontFamily: 'SFProDisplay-Semibold', marginLeft: 5, fontSize: 20, color: colors.black }}>30</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Bold', marginLeft: 5, fontSize: 14, color: colors.gray }}>Order</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardShadowWhiteHalfWidth}>
                        <View style={{ width: screenWidth / 2.3, flexDirection: 'row' }}>
                            <View style={{ height: 50, width: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'blue' }} />
                            <View style={{ paddingHorizontal: 15 }}>
                                <SimpleLineIcons name="drawer" size={30} color={'blue'} />
                                <Text style={{ fontFamily: 'SFProDisplay-Semibold', marginLeft: 5, fontSize: 20, color: colors.black }}>30</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Bold', marginLeft: 5, fontSize: 14, color: colors.gray }}>Produk</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Spacer>
                    {this._renderCardStatistik()}
                </Spacer>
                <Modal
                    visible={this.state.loadingscreen}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <ActivityIndicator size="large" color={colors.orange} />
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Dashboard;
