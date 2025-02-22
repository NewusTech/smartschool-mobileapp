import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconEyeSlice({
  width = 24,
  height = 24,
  color = "primary-50",
  ...rest
}: IconProps) {
  const { Colors } = useAppTheme();

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M4.97861 3.15022C4.87564 3.05464 4.74062 3.00106 4.60012 3.00002C4.45963 2.99897 4.32383 3.05054 4.21944 3.14458C4.11506 3.23863 4.04965 3.36833 4.03607 3.50817C4.0225 3.64801 4.06176 3.78787 4.14611 3.90022L6.10361 6.05647C2.60861 8.1096 1.1133 11.4002 1.04861 11.5474C1.01656 11.6194 1 11.6973 1 11.7762C1 11.855 1.01656 11.9329 1.04861 12.0049C1.08049 12.0771 1.86049 13.8068 3.60236 15.5487C5.21861 17.163 7.99549 19.0877 12.0624 19.0877C13.7623 19.098 15.444 18.7382 16.9908 18.033L19.1471 20.404C19.2475 20.5144 19.3877 20.5803 19.5368 20.5874C19.6859 20.5944 19.8317 20.5419 19.9421 20.4415C20.0524 20.341 20.1184 20.2008 20.1255 20.0517C20.1325 19.9026 20.08 19.7569 19.9795 19.6465L4.97861 3.15022ZM9.53674 9.83647L13.7555 14.479C13.1221 14.8748 12.3698 15.0355 11.63 14.9333C10.8901 14.831 10.2097 14.4722 9.7074 13.9195C9.20511 13.3667 8.91286 12.6552 8.88167 11.9089C8.85048 11.1627 9.08232 10.4292 9.53674 9.83647ZM12.0624 17.9627C9.12049 17.9627 6.55174 16.8921 4.42643 14.7818C3.53528 13.8965 2.78134 12.8832 2.18955 11.7752C2.59174 11.0065 4.07393 8.4771 6.87705 6.90866L8.7708 8.99085C8.09656 9.7898 7.73551 10.8065 7.7548 11.8517C7.77409 12.897 8.17242 13.8996 8.87568 14.6732C9.57894 15.4467 10.5392 15.9384 11.5779 16.0569C12.6166 16.1753 13.663 15.9124 14.5224 15.3171L16.1921 17.1546C14.883 17.6963 13.479 17.971 12.0624 17.9627ZM12.6624 8.64397C12.5158 8.616 12.3863 8.53095 12.3025 8.40753C12.2186 8.2841 12.1872 8.13242 12.2152 7.98585C12.2431 7.83928 12.3282 7.70982 12.4516 7.62595C12.575 7.54209 12.7267 7.51069 12.8733 7.53866C13.7893 7.7166 14.6232 8.18577 15.2508 8.87624C15.8784 9.5667 16.2661 10.4415 16.3561 11.3702C16.363 11.4438 16.3552 11.518 16.3334 11.5886C16.3116 11.6591 16.276 11.7247 16.2289 11.7816C16.1817 11.8384 16.1238 11.8854 16.0584 11.9199C15.9931 11.9543 15.9216 11.9756 15.848 11.9824H15.7955C15.6548 11.983 15.519 11.9309 15.4149 11.8363C15.3108 11.7417 15.2459 11.6115 15.233 11.4715C15.1661 10.7862 14.8798 10.1408 14.4166 9.63136C13.9535 9.1219 13.3382 8.7756 12.6624 8.64397ZM23.0761 12.0049C23.0377 12.0912 22.1039 14.1612 19.9955 16.0474C19.9408 16.0987 19.8764 16.1385 19.8061 16.1645C19.7358 16.1905 19.661 16.2022 19.5861 16.1989C19.5113 16.1957 19.4378 16.1774 19.37 16.1453C19.3023 16.1133 19.2416 16.0679 19.1917 16.0121C19.1417 15.9562 19.1034 15.8909 19.079 15.8201C19.0546 15.7492 19.0446 15.6741 19.0496 15.5994C19.0546 15.5246 19.0745 15.4515 19.1082 15.3845C19.1418 15.3176 19.1885 15.258 19.2455 15.2093C20.3353 14.2301 21.2456 13.0679 21.9352 11.7752C21.3433 10.6673 20.5893 9.654 19.6983 8.76866C17.573 6.65835 15.0042 5.58772 12.0624 5.58772C11.444 5.58699 10.8266 5.63716 10.2164 5.73772C10.143 5.75157 10.0675 5.75064 9.99437 5.73497C9.92127 5.71931 9.85202 5.68923 9.79068 5.64649C9.72934 5.60376 9.67713 5.54922 9.63711 5.48608C9.59709 5.42293 9.57006 5.35244 9.5576 5.27873C9.54514 5.20501 9.54749 5.12955 9.56453 5.05676C9.58157 4.98397 9.61295 4.9153 9.65683 4.85478C9.70072 4.79425 9.75622 4.74308 9.82011 4.70426C9.884 4.66543 9.95499 4.63973 10.0289 4.62866C10.701 4.5171 11.3811 4.4616 12.0624 4.46272C16.1292 4.46272 18.9061 6.38835 20.5224 8.00272C22.2642 9.7446 23.0442 11.4715 23.0761 11.5474C23.1082 11.6194 23.1247 11.6973 23.1247 11.7762C23.1247 11.855 23.1082 11.9329 23.0761 12.0049Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
