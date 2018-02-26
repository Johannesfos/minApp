import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

export default class Homepage extends React.Component {
  render() {
    return (
      <View>
        <Text> Homepage </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    justifyContent: "center"
  }
});
