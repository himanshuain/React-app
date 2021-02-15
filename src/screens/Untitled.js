import React, { Component } from "react";
import { StyleSheet, View, StatusBar, TextInput, Text } from "react-native";
import WriteText from "../components/WriteText";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import CupertinoButtonInfo2 from "../components/CupertinoButtonInfo2";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import CupertinoButtonDelete1 from "../components/CupertinoButtonDelete1";
import CupertinoButtonDelete2 from "../components/CupertinoButtonDelete2";
import CupertinoButtonDelete3 from "../components/CupertinoButtonDelete3";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.writeTextStack}>
        <WriteText style={styles.writeText}></WriteText>
        <TextInput
          placeholder="Enter Text Here"
          textBreakStrategy="highQuality"
          clearButtonMode="always"
          style={styles.placeholder}
        ></TextInput>
        <CupertinoButtonInfo
          caption="Add+"
          style={styles.cupertinoButtonInfo}
        ></CupertinoButtonInfo>
        <CupertinoButtonInfo2
          caption="Button"
          caption="Clear"
          style={styles.cupertinoButtonInfo2}
        ></CupertinoButtonInfo2>
      </View>
      <View style={styles.rect}>
        <CupertinoButtonInfo1
          caption="Log Out"
          style={styles.cupertinoButtonInfo1}
        ></CupertinoButtonInfo1>
      </View>
      <View style={styles.rect2}>
        <View style={styles.rect3}>
          <View style={styles.loremIpsum2StackRow}>
            <View style={styles.loremIpsum2Stack}>
              <Text style={styles.loremIpsum2}></Text>
              <Text style={styles.loremIpsum3}>
                All class assignments will be in Python. If you have extensive
                programming experience in a different language
                (C/C++/MATLAB/Java/JavaScript) we recommend you familiarize
                yourself with Python basics before you begin your first course.
                Some assignments w
              </Text>
            </View>
            <CupertinoButtonDelete1
              style={styles.cupertinoButtonDelete1}
            ></CupertinoButtonDelete1>
          </View>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.loremIpsum4Stack}>
          <Text style={styles.loremIpsum4}>
            All class assignments will be in Python. If you have extensive
            programming experience in a different language
            (C/C++/MATLAB/Java/JavaScript) we recommend you familiarize yourself
            with Python basics before you begin your first course. Some
            assignments w
          </Text>
          <CupertinoButtonDelete2
            style={styles.cupertinoButtonDelete2}
          ></CupertinoButtonDelete2>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.loremIpsum5Stack}>
          <Text style={styles.loremIpsum5}>
            All class assignments will be in Python. If you have extensive
            programming experience in a different language
            (C/C++/MATLAB/Java/JavaScript) we recommend you familiarize yourself
            with Python basics before you begin your first course. Some
            assignments w
          </Text>
          <CupertinoButtonDelete3
            style={styles.cupertinoButtonDelete3}
          ></CupertinoButtonDelete3>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  writeText: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 103,
    width: 1339,
    shadowColor: "rgba(8,109,230,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  placeholder: {
    top: 17,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 64,
    width: 1107,
    shadowColor: "rgba(74,144,226,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "#fff",
    left: 55
  },
  cupertinoButtonInfo: {
    height: 39,
    width: 82,
    position: "absolute",
    top: 13,
    right: 33
  },
  cupertinoButtonInfo2: {
    height: 36,
    width: 82,
    position: "absolute",
    left: 1224,
    top: 62
  },
  writeTextStack: {
    width: 1339,
    height: 103,
    marginTop: 160,
    marginLeft: 14
  },
  rect: {
    width: 1366,
    height: 114,
    backgroundColor: "rgba(79,24,179,1)",
    marginTop: -263
  },
  cupertinoButtonInfo1: {
    height: 44,
    width: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(247,234,234,0.38)",
    overflow: "visible",
    marginTop: 31,
    marginLeft: 1208
  },
  rect2: {
    width: 1339,
    height: 120,
    backgroundColor: "#E6E6E6",
    marginTop: 171,
    marginLeft: 14
  },
  rect3: {
    width: 1339,
    height: 120,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(74,144,226,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  loremIpsum2: {
    top: 15,
    left: 56,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 76,
    width: 1223
  },
  loremIpsum2Stack: {
    width: 1223,
    height: 76
  },
  cupertinoButtonDelete1: {
    height: 44,
    width: 44,
    backgroundColor: "rgba(74,144,226,1)",
    marginLeft: 20,
    marginTop: 12
  },
  loremIpsum2StackRow: {
    height: 76,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 31,
    marginTop: 23
  },
  rect4: {
    width: 1339,
    height: 130,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(74,144,226,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 33,
    marginLeft: 14
  },
  loremIpsum4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 80,
    width: 1264
  },
  cupertinoButtonDelete2: {
    height: 44,
    width: 44,
    position: "absolute",
    left: 1243,
    top: 21,
    backgroundColor: "rgba(74,144,226,1)"
  },
  loremIpsum4Stack: {
    width: 1287,
    height: 80,
    marginTop: 24,
    marginLeft: 31
  },
  rect5: {
    width: 1339,
    height: 133,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(74,144,226,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 26,
    marginLeft: 14
  },
  loremIpsum5: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 84,
    width: 1264
  },
  cupertinoButtonDelete3: {
    height: 44,
    width: 44,
    position: "absolute",
    left: 1241,
    top: 24,
    backgroundColor: "rgba(74,144,226,1)"
  },
  loremIpsum5Stack: {
    width: 1285,
    height: 84,
    marginTop: 21,
    marginLeft: 31
  }
});

export default Untitled;
