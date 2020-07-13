import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles, { screenWidth } from '../../../components/styles';
import { produk } from '../../../assets/data/data';
import { Image } from 'react-native';
import Spacer from '../../../components/common/Spacers';
import colors from '../../../components/common/Color';
import textStyles from '../../../components/common/typography';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Spacer />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly', }}>
                        {
                            produk.map((item) => (
                                <TouchableOpacity
                                    onPress={() => alert(`${item.title}`)}
                                    style={{
                                        paddingBottom: 10, width: screenWidth / 2 - 30, borderRadius: 10,
                                        elevation: 2, shadowColor: 'grey', backgroundColor: colors.white,
                                        shadowOpacity: 0.5, shadowRadius: 5, marginVertical: 10,
                                        shadowOffset: { width: 0, height: 2 }
                                    }}>
                                    <Image
                                        source={{ uri: item.image_url }}
                                        style={{ width: screenWidth / 2 - 30, height: screenWidth / 2 - 30, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                    />
                                    <View style={{ padding: 10, }}>
                                        <Text style={{ ...textStyles.mediumTextSemibold }}>{item.title}</Text>
                                        <Text style={{ ...textStyles.mediumText }}>{item.harga}</Text>
                                        <Text>Stok :{item.stok}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Product;
