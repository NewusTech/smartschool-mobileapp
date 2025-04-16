import View from "@/components/view";
import { useAppTheme } from "@/context/theme-context";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { Modal, Pressable, TouchableOpacity } from "react-native";
import { Typography } from "../typography";

type ModalAction = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onAction?: () => void;
  title?: string;
  subTitle?: string;
};

export default function ModalSuccess({
  visible,
  setVisible,
  title = "Selamat kamu sudah melamar!!",
  subTitle = "Check lebih lanjut lamaran kamu di Riwayat Pekerjaan",
  onAction,
}: ModalAction) {
  const { Colors } = useAppTheme();
  const animationRef = useRef<LottieView>(null);
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <Pressable
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(20, 21, 17, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setVisible(false)}
      >
        <View
          backgroundColor="white"
          style={{
            width: "80%",
            height: "auto",
            padding: 20,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              height: 220,
              marginBottom: 20,
            }}
          >
            <LottieView
              ref={animationRef}
              source={require("@/assets/lottie/Animation-Succsess.json")}
              style={{ width: "100%", height: "100%" }}
              autoPlay
              loop
            />
          </View>
          <Typography fontFamily="Poppins-Medium" fontSize={16}>
            {title}
          </Typography>
          <Typography
            fontFamily="Poppins-Light"
            fontSize={14}
            color="black-50"
            style={{ textAlign: "center" }}
          >
            {subTitle}
          </Typography>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: Colors["primary-500"],
                borderRadius: 15,
                padding: 10,
                marginTop: 30,
              }}
              onPress={onAction}
            >
              <Typography
                fontFamily="Poppins-Medium"
                fontSize={16}
                color="white"
                style={{ textAlign: "center" }}
              >
                Riwayat Pekerjaan
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}
