import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from '../components/styles';
import Spacer from '../components/common/Spacers';
import { pencarian } from '../assets/data';

class Cari extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.props.navigation.setOptions({
            headerTitle: "Cari"
        })
    }

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Mau cari apa?"
                containerStyle={{ backgroundColor: '#fff', height: 60, marginBottom: 5, marginTop: -1 }}
                inputContainerStyle={{ backgroundColor: '#dedede', borderRadius: 10 }}
                lightTheme
                round
                cancelIcon
                clearIcon
            // showLoading={this.state.search}
            // autoCorrect={false}
            // onChangeText={text => this.searchFilter(text)}
            // value={this.state.value}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <Spacer>
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <Text style={{ fontSize: 14, fontWeight: '600' }}>Pencarian terakhir</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                        {
                            pencarian.map((item) => (
                                <TouchableOpacity key={item.id} style={{
                                    borderRadius: 5, borderWidth: 0.5,
                                    borderColor: '#dedede', margin: 10, padding: 10
                                }}>
                                    <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.title}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </Spacer>
            </View>
        );
    }
}

export default Cari;
