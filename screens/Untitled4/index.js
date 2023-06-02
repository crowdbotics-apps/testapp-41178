import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";

const SplashScreenScreen = ({
  navigation
}) => {
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  }, []);
  return <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200,
    tintColor: "white"
  }
});
export default SplashScreenScreen;