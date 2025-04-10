import { useAppTheme } from "@/context/theme-context";
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "./types";

const IconUser = ({
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
      <Circle cx="12" cy="8" r="5" />
      <Path d="M20 21a8 8 0 0 0-16 0" />
    </Svg>
  );
};

export default IconUser;
