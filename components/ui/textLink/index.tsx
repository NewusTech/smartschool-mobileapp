import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";
import { appFonts, Typography, TypographyProps } from "../typography";

export type TextLinkProps = {
  label: string;
  fontSize?: number;
  fontFamily?: keyof typeof appFonts;
  color?: TypographyProps["color"];
} & TouchableWithoutFeedbackProps;
export default function TextLink(props: TextLinkProps) {
  const {
    label,
    fontFamily = "Poppins-Regular",
    fontSize = 12,
    color = "primary-500",
    ...rest
  } = props;

  return (
    <TouchableWithoutFeedback {...rest}>
      <Typography fontFamily={fontFamily} fontSize={fontSize} color={color}>
        {label}
      </Typography>
    </TouchableWithoutFeedback>
  );
}
