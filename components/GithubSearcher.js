import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  Dimensions,
  ScrollView
} from "react-native";
import GithubUserProfile from "./Githubuserprofile";

export default class GithubSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      gituser: []
    };
  }

  async _OnSearchSubmitHandler(text) {
    try {
      this.setState({
        isLoading: true
      });
      let response = await fetch(`https://api.github.com/users/${text}`);
      let responseJson = await response.json();
      this.setState({
        gituser: responseJson
      });
      this.setState({ isLoading: false });
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  _PostHistory() {
    return this.state.gituserhistory;
  }

  render() {
    //App is loading
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#012267"
          />
        </View>
      );
    }
    //App has no user searched
    if (this.state.gituser.length === 0) {
      return (
        <View>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Search for any github user!
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <GithubUserProfile {...this.state.gituser} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 250,
    left: Dimensions.get("window").width / 2 - 10
  }
});
