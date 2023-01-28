import * as React from "react";
import { Appbar } from "react-native-paper";

const MyHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "#000000" }}>
      <Appbar.Content title="StopWatch" style={{ alignItems: "center" }} />
    </Appbar.Header>
  );
};

export default MyHeader;
