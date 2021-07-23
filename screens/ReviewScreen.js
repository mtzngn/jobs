import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

const ReviewScreen = ({ navigation, likedJobs }) => {
  const renderLikedJobs = () => {
    return likedJobs.map((job) => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View style={styles.detailsWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      );
    });
  };
  return <ScrollView>{renderLikedJobs()}</ScrollView>;
};

ReviewScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Review Jobs",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("settings")}>
        <Text style={{ color: "rgb(0, 122, 255)", fontSize: 20 }}>
          Settings
        </Text>
      </TouchableOpacity>
    ),
  };
};

const mapStateToProps = (state) => {
  return { likedJobs: state.likedJobs };
};

const styles = StyleSheet.create({
  detailsWrapper: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  italics: {
    fontStyle: "italic",
  },
});

export default connect(mapStateToProps)(ReviewScreen);
