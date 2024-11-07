import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors } from '../utils/colors';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '../config/constants';
import MapViewDirections from 'react-native-maps-directions';

const Insideapp = () => {
  const navigation = useNavigation();
  const mapRef = useRef(null);

  const [origin, setOrigin] = useState(null);

  const handleLogin = () => {
    navigation.navigate('HOME');
  };

  const handleSettings = () => {
    console.log('Settings pressed');
  };

  const handleProfile = () => {
    console.log('Profile pressed');
  };

  async function moveToLocation(latitude, longitude) {
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      2000
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            if (details && details.geometry && details.geometry.location) {
              const { lat, lng } = details.geometry.location;
              console.log(`Location: ${lat}, ${lng}`);

              const originCoordinates = {
                latitude: lat,
                longitude: lng,
              };

              setOrigin(originCoordinates);
              moveToLocation(lat, lng); // Pass lat and lng separately
            } else {
              console.log("Location details not available");
            }
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          onFail={(error) => console.log(error)}
        />
      </View>

      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 14.6042,
          longitude: 121.0297,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {origin && (
          <Marker
            title="Rescue Info"
            description="picture button"
            coordinate={origin}
          />
        )}

        {origin && (
          <MapViewDirections
            origin={origin}
            destination={origin} // Update this if you want a route
            apikey={GOOGLE_MAPS_API_KEY}
          />
        )}
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
    position: 'absolute',
    top: 50,
    width: '90%',
    zIndex: 1,
    alignSelf: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: colors.navyblue, // Black background for navbar
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#1a1a1a', // Dark gray for button contrast
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
