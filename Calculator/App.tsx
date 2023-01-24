import React, { useState } from "react";
import { Text, View, Switch, SafeAreaView } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import MyKeyboard from "./src/components/MyKeyboard";
import { Styles } from "./src/styles/GlobalStyles";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light" ? Styles.container : [Styles.container, { backgroundColor: "#000000" }]
        }
      >
        <View style={{ height: 30 }}></View>
        <View style={Styles.setTheme}>
          <Text style={theme === "light" ? { color: myColors.black } : { color: myColors.white }}>
            Light Theme:{" "}
          </Text>
          <Switch
            value={theme === "light"}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </View>
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
