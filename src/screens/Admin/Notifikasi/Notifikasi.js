import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles, { screenWidth } from '../../../components/styles';
import { notification } from '../../../assets/data/data';
import { ListItem } from 'react-native-elements';
import colors from '../../../components/common/Color';
import textStyles from '../../../components/common/typography';

class Notifikasi extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle: "Notifikasi",
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={{ marginHorizontal: 20 }}>
                    <SimpleLineIcons name="menu" size={25} color={'black'} />
                </TouchableOpacity>
            )
        })
        this.state = {
        };
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={notification}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => alert(`${item.title}`)}
                            leftElement={<View style={{
                                width: screenWidth / 7, height: screenWidth / 7, borderRadius: (screenWidth / 7) / 2,
                                justifyContent: 'center', alignItems: 'center',
                                backgroundColor: `${this.getRandomColor()}`
                            }}><Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.white }}>{item.title.charAt(0)}</Text></View>}
                            title={item.title}
                            titleStyle={{...textStyles.largeTextSemibold}}
                            subtitle={item.date}
                            subtitle={item.nama_pelanggan}
                            rightTitle={item.date}
                            rightTitleStyle={{ fontSize: 10, color: colors.black }}
                        />
                    )}
                />
            </View>
        );
    }
}

export default Notifikasi;
