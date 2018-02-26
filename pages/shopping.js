import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

export default class Shopping extends React.Component {
  render() {
    return (
      <View>
        <Text> Mads skal få råd til mat</Text>
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
