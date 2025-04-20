import { useAppTheme } from '@/context/theme-context';
import React from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';
import { IconProps } from './types';

const IconLogout = ({
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
      <Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <Polyline points="16 17 21 12 16 7" />
      <Line x1="21" y1="12" x2="9" y2="12" />
    </Svg>
  );
};

export default IconLogout;
