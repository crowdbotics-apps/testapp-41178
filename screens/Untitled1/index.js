import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {// Handle login logic here
  };

  const handleForgotPassword = () => {// Handle forgot password logic here
  };

  return <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.column}>
          <TextInput style={[styles.input, styles.halfWidth]} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          <TextInput style={[styles.input, styles.halfWidth]} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        </View>
        <TouchableOpacity style={[styles.button, styles.sppbKRsD]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    // updated
    backgroundColor: "#fff",
    marginTop: 50
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  column: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20
  },
  input: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  halfWidth: {
    width: "80%"
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#1c8adb",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  },
  forgotPassword: {
    marginTop: 10
  },
  forgotPasswordText: {
    color: "#1c8adb",
    fontSize: 16
  },
  sppbKRsD: {
    marginTop: 10
  }
});
export default LoginScreen;