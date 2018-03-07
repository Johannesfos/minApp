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
  constructor(props) {
    super(props);
  }
  onPresshandler() {
    try {
      this.props.onDelete(this.props.id);
    } catch (error) {
      console.log(error);
    }
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
      <TouchableOpacity
        style={styles.container}
        onPress={this.onPresshandler.bind(this)}
      >
        <Image source={{ uri: avatar_url }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 4,
    marginLeft: 4
  },

  image: {
    width: Dimensions.get("window").height * 0.1,
    height: Dimensions.get("window").height * 0.1,
    borderWidth: 0.1,
    borderRadius: Dimensions.get("window").height * 0.1 / 2
  },
  name: {
    fontSize: 7,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  }
});
