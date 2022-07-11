import React from 'react';
import { Geojson } from 'react-native-maps';

const GeoJson = ({ geoJsonCountry }: any) => {
  console.log('geojson prop', geoJsonCountry);
  return (
    <Geojson
      geojson={geoJsonCountry as GeoJSON.FeatureCollection}
      strokeColor="red"
      fillColor="rgba(131, 89, 227, 0.19)"
      strokeWidth={2}
    />
  );
};

export default GeoJson;
