import { useAppTheme } from "@/context/theme-context";
import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { IconProps } from "./types";

const IconIDCard = ({
  width = 24,
  height = 24,
  color = "text-default",
  ...rest
}: IconProps) => {
  const { Colors } = useAppTheme();

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={Colors[color]}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16 10h2" />
      <Path d="M16 14h2" />
      <Path d="M6.17 15a3 3 0 0 1 5.66 0" />
      <Circle cx="9" cy="11" r="2" />
      <Rect x="2" y="5" width="20" height="14" rx="2" />
    </Svg>
  );
};

export default IconIDCard;
