import { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import View from "@/components/view";
import { getItem } from "@/lib/async-storage";
import Animated, { Easing, SlideInDown } from "react-native-reanimated";
import { Typography } from "@/components/ui/typography";
import { useAuthActions } from "@/store/userStore";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function InitialScreen() {
  const router = useRouter();

  const { setAccessToken } = useAuthActions();

  useEffect(() => {
    const initAuth = async () => {
      const storageAccessToken = await getItem("accesstoken");

      if (storageAccessToken) {
        setAccessToken(storageAccessToken);
        router.replace("/(authenticated)/(tabs)");
      } else {
        router.replace("/onboard");
      }
    };

    initAuth();
  }, [router]);

  return (
    <View style={style.container}>
      <Animated.View entering={SlideInDown.duration(1000)}>
        <Image
          source={require("@/assets/images/logo.png")}
          // style={{ width: 480 }}
          resizeMode="contain"
        />
      </Animated.View>
      <Typography
        fontFamily="Poppins-Bold"
        color="primary-50"
        fontSize={24}
        style={{ marginVertical: 10 }}
      >
        New Experience With Us
      </Typography>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
