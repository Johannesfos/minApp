import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";
import NavBar from "./components/navBar";
import Homepage from "./pages/homepage";
import Github from "./pages/github";
import Spotify from "./pages/spotify";
import Shopping from "./pages/shopping";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      screenhistory: []
    };
  }

  _OnTabChange(newTab, oldTab) {
    console.log("the current tab is ", newTab, ", and the old one is ", oldTab);
    this.setState(previousState => ({
      screen: newTab,
      screenhistory: [...previousState.screenhistory, oldTab]
    }));
  }

  render() {
    const content = (function(tab) {
      console.log(tab);
      switch (tab) {
        case 0:
          return <Homepage />;
        case 1:
          return <Github />;
        case 2:
          return <Shopping />;
        case 3:
          return <Spotify />;
        default:
          return <Homepage />;
      }
    })(this.state.screen);

    return (
      <View style={styles.container}>
        <View style={styles.pagecontainer}>{content}</View>
        <NavBar OnTabChange={this._OnTabChange.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    justifyContent: "center"
  },
  pagecontainer: {
    paddingTop: Constants.statusBarHeight,
    position: "absolute",
    top: 0,
    width: "100%",
    height: "90%",
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "transparent"
  },

  header: {
    fontSize: 20
  }
});
