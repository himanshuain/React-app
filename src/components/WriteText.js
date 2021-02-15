import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function WriteText(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6"
  }
});

export default WriteText;
