import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { getItem } from '@/lib/async-storage';
import { useAuthActions } from '@/store/userStore';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, { SlideInDown } from 'react-native-reanimated';

export default function InitialScreen() {
  const router = useRouter();

  const { setAccessToken } = useAuthActions();

  useEffect(() => {
    const initAuth = async () => {
      const storageAccessToken = await getItem('accesstoken');

      if (storageAccessToken) {
        setAccessToken(storageAccessToken);
        router.replace('/(authenticated)/(tabs)');
      } else {
        router.replace('/auth/login');
      }
    };

    initAuth();
  }, [router, setAccessToken]);

  return (
    <View style={style.container}>
      <Animated.View entering={SlideInDown.duration(1000)}>
        <Image
          source={require('@/assets/images/logo.png')}
          // style={{ width: 480 }}
          resizeMode="contain"
        />
      </Animated.View>
      <Typography
        fontFamily="Poppins-Bold"
        color="primary-500"
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
