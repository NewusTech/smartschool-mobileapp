import LottieView from 'lottie-react-native';
import React from 'react';

type CustomSplashScreen = {
  onFinish: (param: boolean) => void;
};

export default function CustomSplashScreen({ onFinish }: CustomSplashScreen) {
  return (
    <LottieView
      source={require('@/assets/lottie/Animaation-Splash.json')}
      style={{ width: '100%', height: '100%' }}
      autoPlay
      loop={false}
      duration={4000}
      onAnimationFinish={() => onFinish(true)}
    />
  );
}
