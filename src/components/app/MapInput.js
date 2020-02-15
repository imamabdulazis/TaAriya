import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class MapInput extends React.Component {
    constructor() {
        super();
        this.state = {
            address: '',
        }
    }
    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder='Cari Lokasi'
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'}
                listViewDisplayed={false}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    this.props.notifyChange(details.geometry.location);
                    this.props.nameChange(data.structured_formatting);
                }}

                getDefaultValue={() => ''}
                query={{
                    key: 'AIzaSyCuqp6YJymNF8Et7Xvd6SO3sBYqu2Bkc88',
                    language: 'en'
                }}
                styles={{
                    textInput: {
                        color: '#3B485A',
                        borderWidth: 1,
                        borderColor: '#C4C4C4',
                        height: 35,
                        backgroundColor: '#D8D8D8'
                    },
                    textInputContainer: {
                        width: '100%',
                        backgroundColor: '#fff',
                        height: 55
                    },
                    description: {
                        fontFamily: 'SFProDisplay-Regular',
                    },
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
            />
        );
    }
}
export default MapInput;
