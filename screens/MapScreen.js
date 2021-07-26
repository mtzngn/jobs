import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { Button } from "react-native-elements";

import * as actions from "../actions";

const MapScreen = (props) => {
  console.log(props);
  const [region, setRegion] = useState({
    longitude: -122,
    latitude: 37,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09,
  });
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const onRegionChangeComplete = (region) => {
    setRegion(region);
  };
  const onButtonPress = () => {
    props.fetchJobs(region, () => {
      props.navigation.navigate("deck");
    });
  };

  if (!mapLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <MapView
        region={region}
        style={{ flex: 1 }}
        onRegionChangeComplete={onRegionChangeComplete}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Search This Area"
          large
          backgroundColor="#009688"
          icon={{ name: "search" }}
          onPress={onButtonPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
export default connect(null, actions)(MapScreen);
