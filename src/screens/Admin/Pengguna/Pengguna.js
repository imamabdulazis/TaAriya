import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerActions } from '@react-navigation/native';
import styles from '../../../components/styles';
import Spacer from '../../../components/common/Spacers';
import { pengguna } from '../../../assets/data/data';
import { ListItem } from 'react-native-elements';
import textStyles from '../../../components/common/typography';
import colors from '../../../components/common/Color';

class Pengguna extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle: "Pengguna",
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

    render() {
        return (
            <View style={styles.container}>
                <Spacer />
                <FlatList
                    data={pengguna}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => alert(`${item.title}`)}
                            leftAvatar={{ rounded: true, source: { uri: item.image_url } }}
                            title={item.nama}
                            style={{ marginVertical: 2}}
                            titleStyle={{ ...textStyles.largeTextSemibold }}
                            subtitle={item.no_telp}
                            rightTitle={item.email}
                            rightTitleStyle={{ fontSize: 10, color: colors.black }}
                            bottomDivider
                            chevron
                        />
                    )}
                />
            </View>
        );
    }
}

export default Pengguna;
