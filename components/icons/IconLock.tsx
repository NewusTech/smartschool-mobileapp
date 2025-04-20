import { useAppTheme } from '@/context/theme-context';
import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { IconProps } from './types';

const IconLock = ({
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
      stroke={Colors[color]}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <Circle cx="12" cy="16" r="1" />
      <Rect x="3" y="10" width="18" height="12" rx="2" />
      <Path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </Svg>
  );
};

export default IconLock;
