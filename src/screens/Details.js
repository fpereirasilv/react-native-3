import React, { Component } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image
} from "react-native";
import moment from "moment";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: true
    };
  }

  toggleModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("itemName");
    const image = navigation.getParam("itemImage");
    const local = navigation.getParam("itemLocal");
    const finish_at = navigation.getParam("itemfinish");
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
          <Image
            style={styles.itemImage}
            source={{
              uri: image
                ? image
                : "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
            }}
          />
          <View>
            <Text style={styles.textTile}>{JSON.stringify(name)}</Text>
            <Text style={styles.textContainer}>
              Local: {JSON.stringify(local)}
            </Text>
            <Text style={styles.textContainer}>
              Inscrição + desafio enviado até{" "}
              {moment(finish_at).format("DD/MM/YYYY")}
            </Text>
          </View>
          <TouchableOpacity
            className={"close-modal-btn"}
            style={styles.btnItem}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Text style={styles.btnText} className="close-modal-btn">
              FECHAR
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    justifyContent: "center",
    // alignItems: "center",
    margin: 30,
    backgroundColor: "#FFF"
  },
  btnItem: {
    backgroundColor: "#fff",
    borderColor: "#7800ff",
    borderWidth: 1,
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 10,
    width: 300,
    height: 50
  },
  btnText: {
    textAlign: "center",
    paddingTop: 10
  },
  itemImage: {
    height: 300,
    width: 300
  },
  textTile: {
    fontSize: 18,
    color: "#7800ff"
  },
  textContainer: {
    paddingTop: 5,
    textAlign: "left"
  }
});
