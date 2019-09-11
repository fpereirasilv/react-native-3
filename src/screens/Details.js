import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Acceleration from "./Acceleration";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: true
    };
  }

  // static navigationOptions = ({ navigation }) => {
  //   const params = navigation.state.params || {};
  // };

  toggleModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    // const item = [...accelerations];
    return (
      <Modal
        className={"modal"}
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.props.navigation.goBack();
        }}
      >
        <View style={styles.container}>
          <Text>Teste</Text>
          <TouchableOpacity
            className={"close-modal-btn"}
            style={styles.btnItem}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Text>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  btnItem: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: "yellow",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20
  }
});
