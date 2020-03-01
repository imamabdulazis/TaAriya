import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import moment from 'moment';
import 'moment/locale/id'
import Octicons from 'react-native-vector-icons/Octicons';
import Spacer from '../components/common/Spacers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View style={{ width: width - 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginHorizontal: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, }}>{moment(new Date()).format('dddd MMMM YYYY')} </Text>
                        <TouchableOpacity>
                            <Octicons name='settings' size={25} color='red' />
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <Spacer />
                    <View style={{ width: width - 30, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <AntDesign name='setting' size={40} color='red' />
                            <Text>Servis</Text>
                            <Text>Mesin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Entypo name='lifebuoy' size={40} color='red' />
                            <Text>Tambal</Text>
                            <Text>Ban</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Entypo name='layers' size={40} color='red' />
                            <Text>Ganti</Text>
                            <Text>Jok</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Entypo name='sina-weibo' size={40} color='red' />
                            <Text>Ganti</Text>
                            <Text>Oli</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <View style={{ width: width - 30, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Entypo name='sound' size={40} color='red' />
                            <Text>Servis</Text>
                            <Text>Lampu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Entypo name='bell' size={40} color='red' />
                            <Text>Servis</Text>
                            <Text>Klakson</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Entypo name='shopping-cart' size={40} color='red' />
                            <Text>Beli</Text>
                            <Text>Onderdil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width / 5, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                            height: width / 3, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Entypo name='landline' size={40} color='red' />
                            <Text>Hubungi</Text>
                            <Text>Bengkel</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer/>
                    <Spacer>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, }}>Artikel Terkini</Text>
                    </Spacer>
                    <Spacer>
                        <TouchableOpacity>
                            <Card>
                                <Card.Cover source={{ uri: 'https://picsum.photos/700' }}
                                    style={{ height: width / 2.5 }}
                                />
                                <Card.Content>
                                    <Title>Ariya Males Skripsi</Title>
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
