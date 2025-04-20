import { useAppTheme } from '@/context/theme-context';
import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './types';

const EmailIcon = ({
  width = 24,
  height = 24,
  color = 'text-default',
  ...rest
}: IconProps) => {
  const { Colors } = useAppTheme();

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default EmailIcon;
