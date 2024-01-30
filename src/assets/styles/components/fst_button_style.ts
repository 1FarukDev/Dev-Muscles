import { StyleSheet } from "react-native";
import { COLOR } from "../color";

export const FTXButtonStyle = StyleSheet.create({
  buttonPrimaryStyle: {
    backgroundColor: COLOR.BUTTON_PRIMARY,
    textAlign: "center",
    paddingHorizontal: 35,
    paddingVertical: 5,
    borderRadius: 10,
  },
  buttonNormalWeightStyle: {
    fontWeight: "400",
  },
  buttonBoldWeightStyle: {
    fontWeight: "500",
  },
  buttonXBoldWeightStyle: {
    fontWeight: "700",
  },
});
