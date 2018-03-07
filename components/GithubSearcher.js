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
      text: "Search for Githubuser...",
      isLoading: false,
      gituser: [],
      gituserhistory: []
    };
  }
  _isDuplicate(user) {
    var arr = this.state.gituserhistory.filter(
      item => item.props.id === user.id
    );
    if (arr.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  _onPressHandler(id) {
    var arr = this.state.gituserhistory.filter(item => item.props.id !== id);
    this.setState({ gituserhistory: arr });
  }

  async _OnSearchSubmitHandler() {
    try {
      this.setState({ isLoading: true });
      let response = await fetch(
        `https://api.github.com/users/${this.state.text}`
      );
      let responseJson = await response.json();
      this.setState({
        gituser: responseJson,
        text: ""
      });
      let gitsearchhist = (
        <GithubUserProfileHistory
          {...this.state.gituser}
          onDelete={this._onPressHandler.bind(this)}
          Key={this.state.gituser.id}
        />
      );
      if (gitsearchhist.props.message) {
        console.log("No username found, did not add");
      } else {
        if (this._isDuplicate(this.state.gituser) === false) {
          this.setState(prevState => ({
            gituserhistory: [...prevState.gituserhistory, gitsearchhist]
          }));
        } else {
          console.log("user already exsists in history");
        }
      }
      this.setState({ isLoading: false });
    } catch (error) {
      console.error("error on submitting Github");
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
            placeholder={"Search for username..."}
            value={this.state.text}
            autoCorrect={false}
            keyboardType={"web-search"}
          />
          <View style={styles.historycontainer}>
            <Text
              style={{ textAlign: "center", fontSize: 14, marginBottom: 10 }}
            >
              - Search history -
            </Text>
            <ScrollView horizontal={true}>
              {this.state.gituserhistory}
            </ScrollView>
          </View>
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
        <View style={styles.historycontainer}>
          <Text style={{ textAlign: "center", fontSize: 14, marginBottom: 10 }}>
            - Search history -
          </Text>
          <ScrollView horizontal={true}>{this.state.gituserhistory}</ScrollView>
        </View>
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
    position: "absolute",
    top:
      Dimensions.get("window").height - Dimensions.get("window").height * 0.39,
    width: "100%"
  },
  userinput: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 15,
    width: Dimensions.get("window").width * 0.7,
    left:
      Dimensions.get("window").width / 2 -
      Dimensions.get("window").width * 0.7 / 2,
    textAlign: "center"
  },
  loading: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 100,
    left: Dimensions.get("window").width / 2 - 10
  }
});
