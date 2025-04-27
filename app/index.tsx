import View from '@/components/view';
import { getItem } from '@/lib/async-storage';
import { useAuthActions } from '@/store/userStore';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import Animated, { SlideInDown } from 'react-native-reanimated';

export default function InitialScreen() {
  const router = useRouter();

  const { setAccessToken } = useAuthActions();

  const width = Dimensions.get('window').width;

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
      <Animated.View entering={SlideInDown.duration(500)}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={{
            width: 0.6 * width,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
