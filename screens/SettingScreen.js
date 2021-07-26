import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";

const SettingScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Button
        title="Reset Liked Jobs"
        large
        icon={{ name: "delete-forever" }}
        backgroundColor="#F44336"
        onPress={props.clearLikedJobs}
      />
    </View>
  );
};

export default connect(null, actions)(SettingScreen);
