import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Lingking,
  Linking,
} from "react-native";
import { Card, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

const ReviewScreen = ({ navigation, liked }) => {
  console.log(liked);
  const renderLikedJobs = () => {
    return liked.likedJob.map((job) => {
      const { company, formattedRelativeTime, url, jobkey, jobtitle } = job;

      return (
        <Card title={jobtitle} key={jobkey}>
          <View style={{ height: 200 }}>
            <View style={styles.detailsWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
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
  return { liked: state.likedJobs };
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
