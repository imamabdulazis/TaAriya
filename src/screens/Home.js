import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TouchableHighlight, StatusBar, ImageBackground } from 'react-native';
import moment from 'moment';
import 'moment/locale/id'
import Octicons from 'react-native-vector-icons/Octicons';
import Spacer from '../components/common/Spacers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { SearchBar } from 'react-native-elements';
import styles from '../components/styles';
import { DrawerActions } from '@react-navigation/native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.props.navigation.setOptions({
            headerTitle: 'Dashboard',
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
                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={{ marginLeft: 15 }}>
                    <MaterialIcons name='sort' size={30} color='#000' />
                </TouchableOpacity>
            ),
        })
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <ScrollView>
                    <ImageBackground
                        source={{ uri: 'https://images.unsplash.com/photo-1570129476815-ba368ac77013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' }}
                        style={{ width: width, height: width / 1.5 }}>
                        <View style={{ padding: 10, backgroundColor: '#fff' }}>
                            <TouchableRipple
                                onPress={() => navigation.navigate('cari')}
                                style={{ padding: 10, backgroundColor: '#dedede', borderRadius: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <AntDesign name="search1" size={15} color={'grey'} />
                                    <Text style={{ marginLeft: 5, color: 'grey' }}>Mau cari apa?</Text>
                                </View>
                            </TouchableRipple>
                        </View>
                    </ImageBackground>
                    <View style={{ width: width - 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginHorizontal: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>{moment(new Date()).format('dddd, Do MMMM YYYY')} </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('pengaturan')}>
                            <Octicons name='settings' size={25} color='#000' />
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <Spacer />
                    <View style={{ width: width - 30, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <AntDesign name='setting' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Servis</Text>
                            <Text style={{ color: '#fff' }}>Mesin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <Entypo name='lifebuoy' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Tambal</Text>
                            <Text style={{ color: '#fff' }}>Ban</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <Entypo name='layers' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Ganti</Text>
                            <Text style={{ color: '#fff' }}>Jok</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <Entypo name='sina-weibo' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Ganti</Text>
                            <Text style={{ color: '#fff' }}>Oli</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <View style={{ width: width - 30, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <Entypo name='sound' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Servis</Text>
                            <Text style={{ color: '#fff' }}>Lampu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <Entypo name='bell' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Servis</Text>
                            <Text style={{ color: '#fff' }}>Klakson</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <Entypo name='shopping-cart' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Beli</Text>
                            <Text style={{ color: '#fff' }}>Onderdil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5,
                            height: width / 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
                        }}>
                            <Entypo name='landline' size={40} color='#fff' />
                            <Text style={{ color: '#fff' }}>Hubungi</Text>
                            <Text style={{ color: '#fff' }}>Bengkel</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <Spacer>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>Artikel Terkini</Text>
                    </Spacer>
                    <Spacer>
                        <TouchableOpacity>
                            <Card>
                                <Card.Cover source={{ uri: 'https://picsum.photos/700' }}
                                    style={{ height: width / 2.5 }}
                                />
                                <Card.Content>
                                    <Title>Title</Title>
                                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </Spacer>
                </ScrollView>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('screen');
export default Home;
