/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const AppColor = {
  light: {
    // app theme color
    white: "#FFFFFF",
    black: "#000000",
    "primary-10": "#EDF1FF",
    "primary-20": "#B6C7FF",
    "primary-30": "#809DFF",
    "primary-40": "#4973FD",
    "primary-50": "#2F55D4",
    "primary-60": "#1A3CAB",
    "primary-70": "#0B2782",
    "primary-80": "#02165A",
    "black-10": "#D1D1D1",
    "black-20": "#B0B0B0",
    "black-30": "#88888",
    "black-40": "#6D6D6D",
    "black-50": "#5D5D5D",
    "black-60": "#4F4F4F",
    "black-70": "#454545",
    "black-80": "#3D3D3D",
    "line-stroke-10": "#FFFFFF",
    "line-stroke-20": "#E4E4E7",
    "line-stroke-30": "#C7C7CD",
    "line-stroke-40": "#AAAAB4",
    "line-stroke-50": "#8F8F9",
    "line-stroke-60": "#757581",
    "line-stroke-70": "#5C5C68",
    "line-stroke-80": "#44444E",
    "success-10": "#F2FFEE",
    "success-20": "#CCFFBA",
    "success-30": "#A5FF86",
    "success-40": "#75EB4C",
    "success-50": "#54C22F",
    "success-60": "#399918",
    "success-70": "#237008",
    "success-80": "#124700",
    "secondary-10": "#FFF0EB",
    "secondary-20": "#FFC2AF",
    "secondary-30": "#FF9573",
    "secondary-40": "#FC6736",
    "secondary-50": "#D34C20",
    "secondary-60": "#AA350F",
    "secondary-70": "#822203",
    "secondary-80": "#591600",
    "backround-10": "#FBFBFB",
    "backround-20": "#E1DDDD",
    "backround-30": "#C8C0C0",
    "backround-40": "#AEA4A4",
    "backround-50": "#958989",
    "backround-60": "#7C6F6F",
    "backround-70": "#625656",
    "backround-80": "#493E3E",
    "error-10": "#FFEAEA",
    "error-20": "#FFBBBB",
    "error-30": "#FF8C8C",
    "error-40": "#FF5D5D",
    "error-50": "#FF2E2E",
    "error-60": "#DF1212",
    "error-70": "#AC0000",
    "error-80": "#790000",
    "waring-10": "#FFF5E8",
    "waring-20": "#FFE0B5",
    "waring-30": "#FFCB82",
    "waring-40": "#FFB64F",
    "waring-50": "#F3991B",
    "waring-60": "#C07204",
    "waring-70": "#8D5200",
    "waring-80": "#5A3500",
    transparent: "#00000000",
  },
  dark: {
    // app theme color
    white: "#FFFFF",
    black: "#000000",
    "primary-10": "#EDF1FF",
    "primary-20": "#B6C7FF",
    "primary-30": "#809DFF",
    "primary-40": "#4973FD",
    "primary-50": "#2F55D4",
    "primary-60": "#1A3CAB",
    "primary-70": "#0B2782",
    "primary-80": "#02165A",
    "black-10": "#D1D1D1",
    "black-20": "#B0B0B0",
    "black-30": "#88888",
    "black-40": "#6D6D6D",
    "black-50": "#5D5D5D",
    "black-60": "#4F4F4F",
    "black-70": "#454545",
    "black-80": "#3D3D3D",
    "line-stroke-10": "#FFFFFF",
    "line-stroke-20": "#E4E4E7",
    "line-stroke-30": "#C7C7CD",
    "line-stroke-40": "#AAAAB4",
    "line-stroke-50": "#8F8F9",
    "line-stroke-60": "#757581",
    "line-stroke-70": "#5C5C68",
    "line-stroke-80": "#44444E",
    "success-10": "#F2FFEE",
    "success-20": "#CCFFBA",
    "success-30": "#A5FF86",
    "success-40": "#75EB4C",
    "success-50": "#54C22F",
    "success-60": "#399918",
    "success-70": "#237008",
    "success-80": "#124700",
    "secondary-10": "#FFF0EB",
    "secondary-20": "#FFC2AF",
    "secondary-30": "#FF9573",
    "secondary-40": "#FC6736",
    "secondary-50": "#D34C20",
    "secondary-60": "#AA350F",
    "secondary-70": "#822203",
    "secondary-80": "#591600",
    "backround-10": "#FBFBFB",
    "backround-20": "#E1DDDD",
    "backround-30": "#C8C0C0",
    "backround-40": "#AEA4A4",
    "backround-50": "#958989",
    "backround-60": "#7C6F6F",
    "backround-70": "#625656",
    "backround-80": "#493E3E",
    "error-10": "#FFEAEA",
    "error-20": "#FFBBBB",
    "error-30": "#FF8C8C",
    "error-40": "#FF5D5D",
    "error-50": "#FF2E2E",
    "error-60": "#DF1212",
    "error-70": "#AC0000",
    "error-80": "#790000",
    "waring-10": "#FFF5E8",
    "waring-20": "#FFE0B5",
    "waring-30": "#FFCB82",
    "waring-40": "#FFB64F",
    "waring-50": "#F3991B",
    "waring-60": "#C07204",
    "waring-70": "#8D5200",
    "waring-80": "#5A3500",
    transparent: "#00000000",
  },
};

export type AppColorUnion = keyof (typeof AppColor)["light"];
