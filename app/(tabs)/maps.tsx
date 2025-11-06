import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

// City coordinates for the cities in your app
const CITY_COORDINATES: Record<string, { latitude: number; longitude: number }> = {
  Austin: { latitude: 30.2672, longitude: -97.7431 },
  Dallas: { latitude: 32.7767, longitude: -96.7970 },
  Houston: { latitude: 29.7604, longitude: -95.3698 },
  'San Antonio': { latitude: 29.4241, longitude: -98.4936 },
  Miami: { latitude: 25.7617, longitude: -80.1918 },
  LA: { latitude: 34.0522, longitude: -118.2437 },
  NYC: { latitude: 40.7128, longitude: -74.0060 },
  Chicago: { latitude: 41.8781, longitude: -87.6298 },
};

const DEFAULT_CITY = 'Austin';

export default function Maps() {
  const initialRegion: Region = {
    ...CITY_COORDINATES[DEFAULT_CITY],
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View className="flex-1">
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        mapType="standard"
      >
        {Object.entries(CITY_COORDINATES).map(([city, coords]) => (
          <Marker
            key={city}
            coordinate={coords}
            title={city}
            description={`Location: ${city}`}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

