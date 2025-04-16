import { useAppTheme } from "@/context/theme-context";
import React, { PropsWithChildren, memo } from "react";
import {
  Platform,
  SafeAreaView as RNSafeAareaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from "react-native";

import { SafeAreaView as NativeSafeAreaView } from "react-native-safe-area-context";

const DefaultSafeAreaView =
  Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 11
    ? RNSafeAareaView
    : NativeSafeAreaView;

export type SafeAreaViewStyle = StyleProp<ViewStyle>;

export interface SafeAreaViewProps extends PropsWithChildren {
  style?: SafeAreaViewStyle;
}

function SafeAreaView({ children, style = undefined }: SafeAreaViewProps) {
  const { Colors } = useAppTheme();

  return (
    <>
      <StatusBar
        backgroundColor={Colors["primary-500"]}
        barStyle="light-content"
      />

      <DefaultSafeAreaView
        style={{
          flex: 0,
          backgroundColor: Colors["primary-500"],
        }}
      />

      <DefaultSafeAreaView style={style}>{children}</DefaultSafeAreaView>
    </>
  );
}

export default memo(SafeAreaView);
