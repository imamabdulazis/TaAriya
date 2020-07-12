import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../../components/styles';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');

class SemuaArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3', '4', '5', '6', '7', '8']
        };
        this.props.navigation.setOptions({
            headerTitle: "Semua Artikel"
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.state.data.map((item) => (
                            <TouchableOpacity
                                style={{
                                    width: width - 40, marginHorizontal: 20, marginVertical: 10,
                                    backgroundColor: 'white', padding: 10, flexDirection: 'row',
                                    borderRadius: 10,
                                }}
                                key={item}>
                                <Image
                                    source={{ uri: 'https://picsum.photos/700' }}
                                    style={{ width: width / 5, height: width / 5 }}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Artikel title</Text>
                                    <Text>Artikel Subtitla</Text>
                                    <Text>Artikel tanggal</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default SemuaArtikel;
