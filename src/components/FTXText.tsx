import { TextProps, View, Text } from "react-native";
import { COLOR } from "../assets/styles/color"
import { TEXT_SIZE_TYPE, FONT_TYPES, COLOR_TYPES } from "../dto/types/theme_types";
import { FTXTextStyle } from "../assets/styles/components/fst_text_style";
export interface FTXText {
    text?: string;
    color?: COLOR_TYPES;
    weight?: FONT_TYPES,
    style?: object,
    size?: TEXT_SIZE_TYPE
}

const FTXText = (props: FTXText) => {
    const { text, color, weight, size, style, ...rest } = props;

    let textColorStyle = {};
    let textTypeStyle = {};
    let textWeightStyle = {};
    let textAlignStyle = {};

    switch (weight) {
        case 'normal':
            textWeightStyle = FTXTextStyle.textNormalWeightStyle
            break;
        case 'bold':
            textWeightStyle = FTXTextStyle.textBoldWeightStyle
            break;
        case 'xbold':
            textWeightStyle = FTXTextStyle.textXBoldWeightStyle
            break;
    }
    switch (size) {
        case 'h1':
            textTypeStyle = FTXTextStyle.h1
            break;
        case 'h2':
            textTypeStyle = FTXTextStyle.h2
            break;
        case 'h3':
            textTypeStyle = FTXTextStyle.h3
            break;
    }
    switch (color) {
        case 'primary':
            textColorStyle = FTXTextStyle.primaryColor
            break;
        case 'secondary':
            textColorStyle = FTXTextStyle.secondaryColor
            break;
    }

    const baseTextStyle = {
        ...textColorStyle,
        ...textTypeStyle,
        ...textWeightStyle,
        ...textAlignStyle
    }

    return (
        <Text
            {...rest}
            style={[baseTextStyle, { ...style }]}
        >{text}</Text>
    );
};

export default FTXText;
