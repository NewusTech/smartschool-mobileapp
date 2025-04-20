import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useAppTheme } from '@/context/theme-context';

import { IconProps } from './types';

export function IconGraduationCap({
  width = 24,
  height = 24,
  color = 'primary-500',
}: IconProps) {
  const { Colors } = useAppTheme();

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 10V16"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.42 10.922C21.5991 10.843 21.751 10.7133 21.857 10.5488C21.963 10.3843 22.0184 10.1924 22.0164 9.99673C22.0143 9.80108 21.955 9.61031 21.8456 9.44807C21.7362 9.28584 21.5817 9.15925 21.401 9.08399L12.83 5.17999C12.5695 5.06114 12.2864 4.99963 12 4.99963C11.7137 4.99963 11.4306 5.06114 11.17 5.17999L2.60004 9.07999C2.42201 9.15796 2.27056 9.28613 2.16421 9.44881C2.05786 9.61149 2.00122 9.80163 2.00122 9.99599C2.00122 10.1903 2.05786 10.3805 2.16421 10.5432C2.27056 10.7059 2.42201 10.834 2.60004 10.912L11.17 14.82C11.4306 14.9388 11.7137 15.0003 12 15.0003C12.2864 15.0003 12.5695 14.9388 12.83 14.82L21.42 10.922Z"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 12.5V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V12.5"
        stroke={Colors[color]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
