import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";

const SettingScreen = ({ clearLikedJobs }) => {
  return (
    <View>
      <Button
        title="Reset Liked Jobs"
        large
        icon={{ name: "delete-forever" }}
        backgroundColor="#F44336"
        onPress={clearLikedJobs}
      />
    </View>
  );
};

export default connect(null, actions)(SettingScreen);
