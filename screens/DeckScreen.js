import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import Swipe from "../components/Swipe";
import * as actions from "../actions";
import { Button, Icon } from "react-native-elements";

const DeckScreen = (props) => {
  const renderCard = (job) => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };
    return (
      <Card key={job.jobtitle}>
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
      <View
        style={{ height: 700, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 30 }}>No More Jobs</Text>
        <Button
          title="Back to Map"
          large
          icon={{ name: "my-location" }}
          backgroundColor="#03A9F4"
          onPress={() => props.navigation.navigate("map")}
        />
      </View>
    );
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Swipe
        data={props.jobs}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        keyProp="jobkey"
        onSwipeRight={(job) => props.likeJob(job)}
        onSwipeLeft={() => {}}
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

DeckScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Jobs",
    tabBarIcon: <Icon name={"description"} size={30} />,
  };
};

export default connect(mapStateToProps, actions)(DeckScreen);
