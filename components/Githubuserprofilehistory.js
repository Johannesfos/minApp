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

export default class GithubUserProfileHistory extends React.Component {
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

    return (
      <View style={styles.container}>
        <Image source={{ uri: avatar_url }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 99,
    width: 100,
    flexDirection: "column"
  },

  image: {
    width: 50,
    height: 50,
    left: 25
  },
  name: {
    fontSize: 7,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  }
});
