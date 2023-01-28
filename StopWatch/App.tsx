import React from "react";
import { StyleSheet, View } from "react-native";

import { StopWatch } from "./components/StopWatch";

const App = () => {
  return (
    <View style={styles.container}>
      <StopWatch />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
