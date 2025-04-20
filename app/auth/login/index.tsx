import EmailIcon from '@/components/icons/IconEmail';
import IconLock from '@/components/icons/IconLock';
import { Button } from '@/components/ui/button';
import Loader from '@/components/ui/loader';
import SafeAreaView from '@/components/ui/safeAreaView';
import TextInput from '@/components/ui/textInput';
import TextLink from '@/components/ui/textLink';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { setItem } from '@/lib/async-storage';
import { useAuthLogin } from '@/services/user/api';
import {
  PostLoginPayload,
  postLoginPayloadSchema,
} from '@/services/user/validation';
import { useAuthActions } from '@/store/userStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Login() {
  const router = useRouter();
  const navigation = useNavigation();

  // store
  const { setAccessToken } = useAuthActions();

  const loginMutation = useAuthLogin();

  const { control, handleSubmit, formState } = useForm<PostLoginPayload>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(postLoginPayloadSchema),
    mode: 'all',
  });

  // fake login
  const mockLogin = async () => {
    setAccessToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
    );
    await setItem(
      'accesstoken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
    );
    Toast.show({
      type: 'success',
      text1: 'Login berhasil!',
      text2: 'Selamat anda berhasil login',
    });
    navigation.reset({
      index: 0,
      routes: [{ name: '(authenticated)/(tabs)' as never }],
    });
  };

  const handleLoginMutation = handleSubmit(() => {
    // loginMutation.mutate(data, {
    //   onSuccess: async (response) => {
    //     setAccessToken(response.data.token);
    //     await setItem("accesstoken", response.data.token);
    //     await setItem("profile", response.data);
    //     Toast.show({
    //       type: "success",
    //       text1: "Login berhasil!",
    //       text2: "Selamat anda berhasil login",
    //     });
    //     navigation.reset({
    //       index: 0,
    //       routes: [{ name: "(autenticated)" }],
    //     });
    //   },
    //   onError: () => {
    //     Toast.show({
    //       type: "error",
    //       text1: "Login gagal!",
    //       text2: "email atau password tidak sesuai",
    //     });
    //   },
    // });
    mockLogin();
  });

  const handleLoginWithGoogle = () => {};

  const handleToRegister = () => router.push('/auth/register');

  const handleToForgotPassword = () => {};

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      resizeMode="cover"
      style={style.container}
    >
      <SafeAreaView style={style.container}>
        <View backgroundColor="white" style={style.card}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={style.logo}
          />
          <Typography
            fontSize={16}
            fontFamily="Poppins-Bold"
            color="primary-500"
            style={{ textAlign: 'center', marginTop: 20 }}
          >
            Masuk ke Akun Anda
          </Typography>
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

          <View style={{ alignItems: 'flex-start' }}>
            <TextLink
              label="Lupa Password?"
              fontSize={15}
              color="primary-500"
              fontFamily="Poppins-SemiBold"
              onPress={handleToForgotPassword}
            />
            <Typography fontSize={10} color="text-secondary">
              Silakan hubungi admin atau operator sekolah jika Anda lupa dengan
              kata sandi Anda
            </Typography>
          </View>
          <Button
            style={style.marginTop10}
            disabled={!formState.isValid || loginMutation.isPending}
            onPress={handleLoginMutation}
          >
            {loginMutation.isPending ? <Loader color="white" /> : 'Masuk'}
          </Button>
          <View style={style.noAccount}>
            <Typography
              fontSize={12}
              fontFamily="Poppins-Bold"
              color="text-secondary"
            >
              Belum punya akun?
            </Typography>
          </View>
          <Button
            style={style.marginTop10}
            variant="outlined"
            textColor="primary-500"
            color="primary-500"
            onPress={handleToRegister}
          >
            Daftar
          </Button>

          <Button
            style={style.marginTop10}
            variant="outlined"
            textColor="black"
            color="line"
            disabled={!formState.isValid || loginMutation.isPending}
            onPress={handleLoginWithGoogle}
            iconBefore={
              <Image
                source={require('../../../assets/images/google.png')}
                style={style.google}
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
    position: 'relative',
  },
  card: {
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 15,
    paddingVertical: 30,
    marginVertical: 'auto',
    marginHorizontal: 20,
  },
  logo: {
    width: 153,
    height: 48,
    alignSelf: 'center',
  },
  google: {
    width: 18,
    height: 18,
  },
  marginTop10: {
    marginTop: 10,
  },
  noAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});
