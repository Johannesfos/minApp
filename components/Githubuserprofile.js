import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  Image
} from "react-native";

export default class GithubUserProfile extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      message,
      avatar_url,
      bio,
      company,
      followers,
      location,
      name
    } = this.props;
    if (message) {
      return (
        <View>
          <Text>{message}</Text>
        </View>
      );
    } else {
      console.log(avatar_url);
      return (
        <View>
          <Text>{name}</Text>
          <Image source={{ uri: avatar_url }} style={styles.image} />
          <Text>Location: {location}</Text>
          <Text>Followers: {followers}</Text>
          <Text>Bio: {bio}</Text>
          <Text>Company: {company}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#121212"
  },
  userinput: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    width: 250
  }
});
