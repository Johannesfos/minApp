import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  Image,
  Dimensions
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
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            No user found with that username, Try again!
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>
          <Image source={{ uri: avatar_url }} style={styles.image} />

          <Text style={styles.header}>Location:</Text>
          <Text style={{ textAlign: "center", fontSize: 9 }}>{location}</Text>
          <Text style={styles.header}>Followers:</Text>
          <Text style={{ textAlign: "center", fontSize: 9 }}>{followers}</Text>
          <Text style={styles.header}>Bio:</Text>
          <Text style={{ textAlign: "center", fontSize: 9 }}>{bio}</Text>
          <Text style={styles.header}>Company:</Text>
          <Text style={{ textAlign: "center", fontSize: 9 }}>{company}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.45,
    width: Dimensions.get("window").width * 0.7,
    left:
      Dimensions.get("window").width / 2 -
      Dimensions.get("window").width * 0.7 / 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    margin: 5,
    marginBottom: 20,
    paddingTop: 5,
    backgroundColor: "white",
    borderRadius: 20
  },

  image: {
    height: Dimensions.get("window").width * 0.4,
    width: Dimensions.get("window").width * 0.4,

    borderWidth: 2,
    borderColor: "#121212"
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  header: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center"
  }
});
