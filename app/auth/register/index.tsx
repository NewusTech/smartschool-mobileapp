import EmailIcon from "@/components/icons/IconEmail";
import IconIDCard from "@/components/icons/IconIDCard";
import IconLock from "@/components/icons/IconLock";
import IconUser from "@/components/icons/IconUser";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import SafeAreaView from "@/components/ui/safeAreaView";
import TextInput from "@/components/ui/textInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/view";
import { useAuthRegister } from "@/services/user/api";
import {
  PostRegisterPayload,
  postRegisterPayloadSchema,
} from "@/services/user/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Image, ImageBackground, StyleSheet } from "react-native";

import Toast from "react-native-toast-message";

export default function Register() {
  const router = useRouter();

  const registerMutation = useAuthRegister();

  const { control, formState, handleSubmit } = useForm<PostRegisterPayload>({
    resolver: zodResolver(postRegisterPayloadSchema),
    mode: "all",
  });

  const handleRegister = handleSubmit((payload) => {
    registerMutation.mutate(payload, {
      onSuccess: (response) => {
        Toast.show({
          type: "success",
          text1: "Register berhasil!",
          text2: "Silahkan login dengan akun yg terdaftar",
        });

        router.replace("/auth/login");
      },
      onError: (error: any) => {
        const serverErrorString = error.response?.data?.message;
        Toast.show({
          type: "error",
          text1: "Registarasi gagal",
          text2: typeof serverErrorString === "string" ? serverErrorString : "",
        });
      },
    });
  });

  const handleToLogin = () => router.push("/auth/login");

  return (
    <ImageBackground
      source={require("../../../assets/images/background.png")}
      resizeMode="cover"
      style={style.container}
    >
      <SafeAreaView style={style.container}>
        <View backgroundColor="white" style={style.card}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={style.logo}
          />
          <Typography
            fontSize={16}
            fontFamily="Poppins-Bold"
            color="primary-500"
            style={{ textAlign: "center", marginTop: 20 }}
          >
            Daftar Sebagai
          </Typography>

          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextInput
                label="Nama Lengkap"
                placeholder="Nama Lengkap"
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
                iconBefore={<IconUser />}
              />
            )}
          />

          <Controller
            control={control}
            name="nisn"
            render={({ field, fieldState }) => (
              <TextInput
                label="NISN"
                placeholder="Masukkan Nomor"
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
                iconBefore={<IconIDCard />}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextInput
                label="Email"
                placeholder="Contoh@gmail.com"
                keyboardType="email-address"
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
                iconBefore={<EmailIcon />}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextInput
                label="Password"
                placeholder="Kata Sandi"
                secureTextEntry
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
                iconBefore={<IconLock />}
              />
            )}
          />

          <Button
            style={style.marginTop10}
            disabled={!formState.isValid || registerMutation.isPending}
            onPress={handleRegister}
          >
            {registerMutation.isPending ? <Loader color="white" /> : "Daftar"}
          </Button>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <Typography
              fontSize={12}
              fontFamily="Poppins-Bold"
              color="text-secondary"
            >
              Sudah punya akun?
            </Typography>
          </View>
          <Button
            style={style.marginTop10}
            variant="outlined"
            textColor="primary-500"
            onPress={handleToLogin}
          >
            Masuk
          </Button>

          <Button
            style={style.marginTop10}
            variant="outlined"
            textColor="black"
            color="line"
            disabled={!formState.isValid || registerMutation.isPending}
            onPress={() => router.push("/auth/login")}
            iconBefore={
              <Image
                source={require("../../../assets/images/google.png")}
                style={style.logoGoogle}
              />
            }
          >
            Sign In with Google
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  card: {
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: "column",
    gap: 15,
    paddingVertical: 30,
    marginVertical: "auto",
    marginHorizontal: 20,
  },
  logo: {
    width: 153,
    height: 48,
    alignSelf: "center",
  },
  marginTop10: {
    marginTop: 10,
  },
  logoGoogle: {
    width: 18,
    height: 18,
  },
});
