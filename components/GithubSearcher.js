import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  Dimensions
} from "react-native";
import GithubUserProfile from "./Githubuserprofile";

export default class GithubSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Search Github-user...",
      isLoading: false,
      gituser: []
    };
  }

  async _OnSearchSubmit() {
    try {
      this.setState({ isLoading: true });
      let response = await fetch(
        `https://api.github.com/users/${this.state.text}`
      );
      let responseJson = await response.json();
      this.setState({ isLoading: false });
      this.setState({ gituser: responseJson });
      console.log(this.state.gituser);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#012267" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.userinput}
          maxLength={30}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          keyboardType={"web-search"}
          onSubmitEditing={this._OnSearchSubmit.bind(this)}
        />
        <GithubUserProfile {...this.state.gituser} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  userinput: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 20,
    width: 250
  },
  loading: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 50,
    left: Dimensions.get("window").width / 2 - 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
