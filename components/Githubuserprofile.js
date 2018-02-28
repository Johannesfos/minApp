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
        <View>
          <Text>{message}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Image source={{ uri: avatar_url }} style={styles.image} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.header}>Location:</Text>
          <Text style={{ textAlign: "center" }}>{location}</Text>
          <Text style={styles.header}>Followers:</Text>
          <Text style={{ textAlign: "center" }}>{followers}</Text>
          <Text style={styles.header}>Bio:</Text>
          <Text style={{ textAlign: "center" }}>{bio}</Text>
          <Text style={styles.header}>Company:</Text>
          <Text style={{ textAlign: "center" }}>{company}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "#121212",
    left: Dimensions.get("window").width / 2 - 75
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  }
});
