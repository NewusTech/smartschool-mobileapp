import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useAppTheme } from '@/context/theme-context';

import { IconProps } from './types';

export function IconCalendar({
  width = 24,
  height = 24,
  color = 'primary-500',
}: IconProps) {
  const { Colors } = useAppTheme();

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 2V6M16 2V6"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
