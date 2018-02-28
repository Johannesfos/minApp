import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput
} from "react-native";
import GithubSearcher from "../components/GithubSearcher";

export default class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Search Github-user..." };
  }

  render() {
    return (
      <View>
        <GithubSearcher />
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
