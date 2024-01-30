import { StyleSheet, Text, View, Pressable } from "react-native";
import { BUTTON_TYPES, FONT_TYPES, TEXT_SIZE_TYPE } from "../dto/types/theme_types";
import { FTXButtonStyle } from "../assets/styles/components/fst_button_style";
import React from "react";

export interface FTXText {
    buttonText?: string;
    onPress?: any;
    type?: BUTTON_TYPES;
    style?: object
    weight?: FONT_TYPES,
    size?: TEXT_SIZE_TYPE
}

const FTXButton = (props: FTXText) => {
    const { buttonText, onPress, type, style,weight, ...rest } = props


    let buttonTypeStyle = {};
    let buttonWeightStyle = {};
    switch (type) {
        case 'primary':
            buttonTypeStyle = FTXButtonStyle.buttonPrimaryStyle
            break;
        case 'secondary':
            buttonTypeStyle = FTXButtonStyle.buttonPrimaryStyle
            break;
    }
    switch (weight) {
        case 'normal':
            buttonWeightStyle = FTXButtonStyle.buttonNormalWeightStyle
            break;
        case 'bold':
            buttonWeightStyle = FTXButtonStyle.buttonBoldWeightStyle
            break;
        case 'xbold':
            buttonWeightStyle = FTXButtonStyle.buttonXBoldWeightStyle
            break;
    }
    const baseTextStyle = {
        ...buttonTypeStyle,
        ...buttonWeightStyle
    }

    return (
        <Pressable onPress={onPress}>
            <Text
                {...rest}
                style={[baseTextStyle, { ...style }]}
            >{buttonText}</Text>
        </Pressable>
    )
};

export default FTXButton;