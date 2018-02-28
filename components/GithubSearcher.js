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
import GithubUserProfileHistory from "./Githubuserprofilehistory";

export default class GithubSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Search Github-user...",
      isLoading: false,
      gituser: [],
      gituserhistory: []
    };
  }

  async _OnSearchSubmitHandler() {
    try {
      this.setState({ isLoading: true });
      let response = await fetch(
        `https://api.github.com/users/${this.state.text}`
      );
      let responseJson = await response.json();
      this.setState({ isLoading: false });
      this.setState({
        gituser: responseJson,
        text: "Search Github-user..."
      });
      let gitsearchhist = (
        <GithubUserProfileHistory
          {...this.state.gituser}
          key={this.state.gituserhistory.lenght}
        />
      );
      if (gitsearchhist.props.message) {
        console.log("no found, did not add");
      } else {
        this.setState(prevState => ({
          gituserhistory: [...prevState.gituserhistory, gitsearchhist]
        }));
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.userinput}
            maxLength={30}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            autoCorrect={false}
            keyboardType={"web-search"}
          />
          <GithubUserProfile {...this.state.gituser} key={"show"} />
          <ScrollView horizontal={true} style={styles.historycontainer}>
            {this.state.gituserhistory}
          </ScrollView>
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#012267"
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.userinput}
            maxLength={30}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            keyboardType={"web-search"}
            onSubmitEditing={this._OnSearchSubmitHandler.bind(this)}
          />
          <GithubUserProfile {...this.state.gituser} key={"show"} />
        </View>
        <Text style={{ textAlign: "center", fontSize: 14 }}>
          - Search history -
        </Text>
        <ScrollView horizontal={true} style={styles.historycontainer}>
          {this.state.gituserhistory}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  },
  historycontainer: {
    height: 100,
    width: "100%",
    bottom: 0,
    marginTop: 20
  },
  userinput: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    width: 250,
    marginBottom: 30,
    left: Dimensions.get("window").width / 2 - 125,
    textAlign: "center"
  },
  loading: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 50,
    left: Dimensions.get("window").width / 2 - 10
  }
});
