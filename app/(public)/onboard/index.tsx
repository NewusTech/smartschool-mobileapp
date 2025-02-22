import { Button } from "@/components/ui/button";
import {
  IconCaretLeft,
  IconCaretRight,
  IconDotActive,
  IconDotInActive,
} from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import View from "@/components/view";
import { useAppTheme } from "@/context/theme-context";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";

type dummyProps = {
  id: number;
  image: any;
  title: string;
  subTitle: string;
};
const dummy: dummyProps[] = [
  {
    id: 1,
    image: require("@/assets/images/no-image.png"),
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maiores?",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus magni, nam numquam neque minima.",
  },
  {
    id: 2,
    image: require("@/assets/images/no-image.png"),
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maiores?",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus magni, nam numquam neque minima.",
  },
  {
    id: 3,
    image: require("@/assets/images/no-image.png"),
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maiores?",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus magni, nam numquam neque minima.",
  },
  {
    id: 4,
    image: require("@/assets/images/no-image.png"),
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maiores?",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus magni, nam numquam neque minima.",
  },
];

export default function Index() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { Colors } = useAppTheme();
  const [activePage, setActivePage] = useState<number>(0);
  const pagerRef = useRef<PagerView>(null);
  const translateX = useSharedValue<number>(0);

  const isFocused = useIsFocused();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
  }));

  const hanldeNext = () => {
    if (pagerRef.current && activePage < dummy.length - 1) {
      pagerRef.current.setPage(activePage + 1);
    } else if (activePage === dummy.length - 1) {
      router.push("/onboard/final");
    }
  };

  const handlePrev = () => {
    if (pagerRef.current && activePage > 0) {
      pagerRef.current.setPage(activePage - 1);
    }
  };

  useEffect(() => {
    if (isFocused) {
      if (activePage === 0) {
        translateX.value = -100;
      } else {
        translateX.value = 0;
      }
    }
  }, [activePage, isFocused]);
  return (
    <SafeAreaView
      style={{
        paddingVertical: insets.bottom + 40,
        paddingHorizontal: insets.left + 20,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: 1 / 1,
          paddingHorizontal: 10,
        }}
      >
        <PagerView
          ref={pagerRef}
          style={styles.pagerView}
          onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
          initialPage={0}
        >
          {dummy.map((data) => (
            <Image
              key={data.id}
              source={data.image}
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: 1 / 1,
                resizeMode: "cover", // Gunakan 'cover', 'contain', atau 'stretch'
              }}
            />
          ))}
        </PagerView>
      </View>
      <View style={{ marginTop: 20, display: "flex", gap: 5, height: 130 }}>
        <Typography
          fontFamily="Poppins-Medium"
          fontSize={19}
          style={{ textAlign: "center" }}
        >
          {dummy[activePage].title}
        </Typography>
        <Typography
          fontFamily="Poppins-Light"
          fontSize={15}
          style={{ textAlign: "center" }}
        >
          {dummy[activePage].subTitle}
        </Typography>
      </View>
      <View
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Animated.View style={[animatedStyles]}>
          <TouchableOpacity
            style={[
              styles.buttonChevron,
              { backgroundColor: Colors["primary-50"] },
            ]}
            onPress={handlePrev}
          >
            <IconCaretLeft color="white" />
          </TouchableOpacity>
        </Animated.View>
        <View
          style={{
            flexDirection: "row",
            width: "70%",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 10,
          }}
        >
          {dummy.map((_, index) => (
            <Animated.View key={index} entering={FadeIn} exiting={FadeOut}>
              <TouchableOpacity
                style={[{ backgroundColor: Colors["transparent"] }]}
                onPress={() => pagerRef.current?.setPage(index)}
              >
                {activePage === index ? (
                  <IconDotActive />
                ) : (
                  <IconDotInActive color="primary-30" />
                )}
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
        <Animated.View>
          <TouchableOpacity
            style={[
              styles.buttonChevron,
              { backgroundColor: Colors["primary-50"] },
            ]}
            onPress={hanldeNext}
          >
            <IconCaretRight color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    width: "100%",
    height: 360,
    objectFit: "cover",
  },
  buttonChevron: {
    borderRadius: 100,
    padding: 10,
  },
});
