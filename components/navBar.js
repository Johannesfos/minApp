import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Constants } from "expo";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/Entypo";

export default class NavBar extends React.Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={styles.navbarposition}
        onTabChange={(newTabIndex, oldTabIndex) =>
          this.props.OnTabChange(newTabIndex, oldTabIndex)
        }
      >
        <Tab
          barBackgroundColor="#003132"
          label="Start"
          icon={<Icon size={24} color="white" name="controller-play" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Github"
          icon={<Icon size={24} color="white" name="github" />}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="shopping"
          icon={<Icon size={24} color="white" name="shopping-cart" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Spotify"
          icon={<Icon size={24} color="white" name="spotify" />}
        />
      </BottomNavigation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    justifyContent: "center"
  },

  navbarposition: {
    height: 90,
    elevation: 8,
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0
  }
});
