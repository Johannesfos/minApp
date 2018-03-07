import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";
import GithubSearcher from "../components/GithubSearcher";
import GithubUserProfileHistory from "../components/Githubuserprofilehistory";
import { Constants } from "expo";

export default class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      history: [],
      loading: false
    };
  }
  GetHistory() {
    const history = this.refs.gitsearch._PostHistory();
    return history;
  }
  IsDuplicate(user) {
    var arr = this.state.history.filter(item => item.props.id === user.id);
    if (arr.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  async OnSearchSubmithandler() {
    try {
      let gituser = await this.refs.gitsearch._OnSearchSubmitHandler(
        this.state.text
      );
      this.setState({
        text: ""
      });
      this.UpdateGituserHistory(gituser);
      console.log(this.state.history.length);
    } catch (error) {
      console.log(error);
    }
  }

  OnPressHandler(id) {
    var arr = this.state.history.filter(item => item.props.id !== id);
    this.setState({ history: arr });
  }

  UpdateGituserHistory(gituser) {
    let gitsearchhist = (
      <GithubUserProfileHistory
        {...gituser}
        onDelete={this.OnPressHandler.bind(this)}
        Key={gituser.id}
      />
    );
    if (gitsearchhist.props.message) {
      console.log("user not found");
    } else {
      if (this.IsDuplicate(gituser) === false) {
        this.setState(prevState => ({
          history: [...prevState.history, gitsearchhist]
        }));
      } else {
        console.log("user already exsists in history");
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            marginBottom: 10,
            marginTop: 10
          }}
        >
          - Search for Github users -
        </Text>
        <TextInput
          style={styles.userinput}
          maxLength={30}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          autoCorrect={false}
          keyboardType={"web-search"}
          onSubmitEditing={this.OnSearchSubmithandler.bind(this)}
        />
        <GithubSearcher ref="gitsearch" />
        <View style={styles.historycontainer}>
          <Text style={{ textAlign: "center", fontSize: 14, marginBottom: 10 }}>
            - Search history -
          </Text>
          <ScrollView horizontal={true}>{this.state.history}</ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    backgroundColor: "white"
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
  historycontainer: {
    position: "absolute",
    top:
      Dimensions.get("window").height - Dimensions.get("window").height * 0.39,
    width: "100%"
  }
});
