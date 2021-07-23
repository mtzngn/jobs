import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import Swipe from "../components/Swipe";

const DeckScreen = (props) => {
  console.log(props);
  const renderCard = (job) => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };
    return (
      <Card>
        <Card.Title>{job.jobtitle}</Card.Title>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === "android" ? true : false}
            initialRegion={initialRegion}
          ></MapView>
        </View>

        <Card.Divider />
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>/g, "").replace(/<\/b>/g, "")}</Text>
      </Card>
    );
  };
  const renderNoMoreCards = () => {
    return (
      <Card>
        <Card title="No more jobs" />
      </Card>
    );
  };

  return (
    <View>
      <Swipe
        data={props.jobs}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
};

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

export default connect(mapStateToProps)(DeckScreen);
