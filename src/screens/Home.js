import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TouchableHighlight, StatusBar, ImageBackground, Modal, ActivityIndicator } from 'react-native';
import moment from 'moment'
import * as nav from '../services/nav';
import 'moment/locale/id';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Octicons from 'react-native-vector-icons/Octicons';
import Spacer from '../components/common/Spacers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple, Divider } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { SearchBar } from 'react-native-elements';
import styles from '../components/styles';
import { DrawerActions } from '@react-navigation/native';
import SpacerSmall from '../components/common/SpacerSmall';
import textStyles from '../components/common/typography';
import colors from '../components/common/Color';
import { artikel } from '../assets/data/data';
import SpacerBotTop from '../components/common/SpacerBotTop';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            loadingscreen: true,
        };
        this.props.navigation.setOptions({
            headerTitle: () => (
                <TouchableOpacity onPress={() => nav.navigate('cari')}>
                    <View style={styles.searchbarHome}>
                        <AntDesign name="search1" size={15} color={colors.gray} />
                        <SpacerSmall />
                        <Text style={{ ...textStyles.largeText, color: colors.gray }}>
                            Mau servis apa?
                        </Text>
                    </View>
                </TouchableOpacity>
            ),
            headerTitleStyle: {
                color: '#000'
            },
            headerStyle: {
                backgroundColor: '#fff',
                shadowColor: '#fff',
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                elevation: 0,
                borderBottomWidth: 0,
            },
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loadingscreen: false })
        }, 1500);
    }


    _renderItem = ({ item, index }) => {
        return (
            <SpacerBotTop>
                <TouchableRipple onPress={() => { }}>
                    <Card>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }}
                            style={{ height: width / 2.5 }}
                        />
                        <Card.Content>
                            <Title>Title</Title>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableRipple>
            </SpacerBotTop>
        );
    }

    render() {
        const { navigation } = this.props;
        const { currentIndex, loadingscreen } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <ScrollView>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={artikel}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={width - 40}
                        onSnapToItem={(index) => this.setState({ currentIndex: index })}
                        autoplay
                        loop
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginLeft: 10,
                            marginRight: 20,
                        }}>
                        <Pagination
                            dotsLength={artikel.length}
                            activeDotIndex={currentIndex}
                            containerStyle={styles.paginationCarousel}
                            dotStyle={{
                                width: 30,
                                height: 10,
                                borderRadius: 5,
                                // marginHorizontal: 1,
                                backgroundColor: colors.orange,
                            }}
                            inactiveDotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                // marginHorizontal: 1,
                                backgroundColor: colors.lightgray,
                            }}
                            inactiveDotOpacity={0.8}
                            inactiveDotScale={0.9}
                        />
                        <TouchableOpacity
                            onPress={() => nav.navigate('semuaArtikel')
                            }>
                            <Text style={{ ...textStyles.mediumTextSemibold, color: colors.orange }}>Lihat Semua Artikel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: width - 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginHorizontal: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>{moment(new Date()).format('dddd, Do MMMM YYYY')} </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('pengaturan')}>
                            <Octicons name='settings' size={25} color='#000' />
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <Divider />
                    <Spacer />
                    <Spacer />
                    <View style={{ width: width - 30, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity
                            onPress={() => nav.navigate('servisMotor')}
                            style={{
                                padding: 10, backgroundColor: 'white', borderRadius: 10, ...styles.divRowStart,
                                elevation: 2, shadowColor: 'grey',
                                shadowOpacity: 0.5, shadowRadius: 5,
                                shadowOffset: { width: 0, height: 2 }
                            }}>
                            <Entypo name='layers' size={40} color={colors.orange} />
                            <SpacerSmall />
                            <Text style={{ ...textStyles.mediumTextSemibold, color: colors.black }}>Servis Motor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => nav.navigate('servisBan')}
                            style={{
                                padding: 10, backgroundColor: 'white', borderRadius: 10, ...styles.divRowStart,
                                elevation: 2, shadowColor: 'grey',
                                shadowOpacity: 0.5, shadowRadius: 5,
                                shadowOffset: { width: 0, height: 2 }
                            }}>
                            <Entypo name='rdio' size={40} color={colors.orange} />
                            <SpacerSmall />
                            <Text style={{ ...textStyles.mediumTextSemibold, color: colors.black }}>Servis Ban</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <View style={{ width: width - 30, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity
                            onPress={() => nav.navigate('bodyRepair')}
                            style={{
                                padding: 10, backgroundColor: 'white', borderRadius: 10, ...styles.divRowStart,
                                elevation: 2, shadowColor: 'grey',
                                shadowOpacity: 0.5, shadowRadius: 5,
                                shadowOffset: { width: 0, height: 2 }
                            }}>
                            <Entypo name='sweden' size={40} color={colors.orange} />
                            <SpacerSmall />
                            <Text style={{ ...textStyles.mediumTextSemibold, color: colors.black }}>Body Repair</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => nav.navigate('aksesoris')}
                            style={{
                                padding: 10, backgroundColor: 'white', borderRadius: 10, ...styles.divRowStart,
                                elevation: 2, shadowColor: 'grey',
                                shadowOpacity: 0.5, shadowRadius: 5,
                                shadowOffset: { width: 0, height: 2 }
                            }}>
                            <Entypo name='palette' size={40} color={colors.orange} />
                            <SpacerSmall />
                            <Text style={{ ...textStyles.mediumTextSemibold, color: colors.black }}> Aksesoris</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                </ScrollView>
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

const { width, height } = Dimensions.get('screen');
export default Home;
