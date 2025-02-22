import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import View from "@/components/view";
import { useAppTheme } from "@/context/theme-context";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function final() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { Colors } = useAppTheme();

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View
        style={{
          width: Dimensions.get("window").width,
          height: 300,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("@/assets/images/no-image.png")}
          style={{ width: "100%", resizeMode: "center" }}
        />
      </View>
      <View style={{ paddingHorizontal: insets.left + 10 }}>
        <Typography
          fontFamily="Poppins-Medium"
          fontSize={22}
          style={{ textAlign: "center" }}
        >
          Selamat Datang di Newus Technology
        </Typography>
        <Typography
          fontFamily="Poppins-Light"
          fontSize={15}
          style={{ textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos et
          consequuntur non veritatis esse corporis officia natus nobis velit,
          consectetur, rem totam. Cum, voluptas in!
        </Typography>
        <View style={{ marginHorizontal: 20 }}>
          <Button
            style={{ marginTop: 20 }}
            onPress={() => router.push("/auth/register")}
          >
            Daftar
          </Button>
          <Button
            style={{ marginTop: 10 }}
            variant="secondary"
            textColor="primary-50"
            onPress={() => router.push("/auth/login")}
          >
            Masuk
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
