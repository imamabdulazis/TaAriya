import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TouchableHighlight, StatusBar, ImageBackground } from 'react-native';
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
import { artikel } from '../assets/data';
import SpacerBotTop from '../components/common/SpacerBotTop';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
        this.props.navigation.setOptions({
            headerTitle: () => (
                <TouchableOpacity onPress={() => nav.navigate('cari')}>
                    <View style={styles.searchbarHome}>
                        <AntDesign name="search1" size={15} color={colors.gray} />
                        <SpacerSmall />
                        <Text style={{ ...textStyles.largeText, color: colors.gray }}>
                            Mau cari apa?
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
            headerLeft: () => (
                <TouchableRipple
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={{ marginLeft: 15, padding: 7 }}>
                    <MaterialIcons name='sort' size={30} color='#000' />
                </TouchableRipple>
            ),
        })
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
        const { currentIndex } = this.state;
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
                            onPress={() => { }
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
                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <AntDesign name='setting' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Servis</Text>
                                <Text style={{ color: colors.black }}>Mesin</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <Entypo name='lifebuoy' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Tambal</Text>
                                <Text style={{ color: colors.black }}>Ban</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <Entypo name='layers' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Ganti</Text>
                                <Text style={{ color: colors.black }}>Jok</Text>
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <Entypo name='sina-weibo' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Ganti</Text>
                                <Text style={{ color: colors.black }}>Oli</Text>
                            </View>
                        </View>
                    </View>
                    <Spacer />
                    <View style={{ width: width - 30, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <Entypo name='sound' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Servis</Text>
                                <Text style={{ color: colors.black }}>Lampu</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <Entypo name='bell' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Servis</Text>
                                <Text style={{ color: colors.black }}>Klakson</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <Entypo name='shopping-cart' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Beli</Text>
                                <Text style={{ color: colors.black }}>Onderdil</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnMenuHome}>
                                <Entypo name='landline' size={40} color='#fff' />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: colors.black }}>Hubungi</Text>
                                <Text style={{ color: colors.black }}>Bengkel</Text>
                            </View>
                        </View>
                    </View>
                    <Spacer />
                </ScrollView>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('screen');
export default Home;
