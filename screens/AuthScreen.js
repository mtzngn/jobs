import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

const AuthScreen = (props) => {
  const { facebookLogin, navigation } = props;

  useEffect(() => {
    const { token } = props;
    if ({ token }) navigation.navigate("map");
    facebookLogin();
    onAuthComplete(props);
  }, []);

  const onAuthComplete = ({ token }) => {
    if ({ token }) navigation.navigate("map");
  };

  return (
    <View>
      <Text style={{ marginTop: 50 }}>It is auth screen</Text>
    </View>
  );
};

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};

export default connect(mapStateToProps, actions)(AuthScreen);
