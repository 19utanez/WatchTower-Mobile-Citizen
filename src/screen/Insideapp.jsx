import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '../config/constants';


const Insideapp = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('HOME');
  };

  const handleSettings = () => {
    console.log('Settings pressed');
  };

  const handleProfile = () => {
    console.log('Profile pressed');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.1}}>
<GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      onFail={error => console.log(error)}
    />
</View>


    
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 14.6042,
          longitude: 121.0297,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{ latitude: 14.601908, longitude: 121.031886 }}
          title={'Rescue Info'}
          description={'picture button'}
        />
      </MapView>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleProfile}>
          <Text style={styles.buttonText}>PROFILE</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleSettings}>
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper} onPress={handleLogin}>
          <Text style={styles.buttonText}>EXIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Insideapp;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchBarContainer: {
    position: 'absolute',  // Makes the search bar stay at the top
    top: 50,               // Position it below the top edge of the screen
    width: '90%',
    zIndex: 1,
    alignSelf: 'center',   // Centers the search bar horizontally
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    height: 56,
    borderRadius: 100,
    backgroundColor: colors.darkred,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
