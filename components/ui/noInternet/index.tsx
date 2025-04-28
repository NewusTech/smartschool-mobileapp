import View from '@/components/view';
import LottieView from 'lottie-react-native';
import { memo } from 'react';
import { Animated, Modal, StyleSheet } from 'react-native';

import { Typography } from '../typography';

interface INoInternetProps {
  isConnected: boolean;
}

const NoInternet = ({ isConnected }: INoInternetProps) => {
  return (
    <Modal transparent visible={!isConnected || false} animationType="fade">
      <View style={styles.background}>
        <Animated.View style={styles.animated}>
          <LottieView
            source={require('@/assets/lottie/Animated-Connection.json')}
            style={{ width: '100%', height: 200 }}
            autoPlay
            loop={true}
          />
          <Typography
            fontFamily="Poppins-Medium"
            fontSize={16}
            style={{ textAlign: 'center' }}
          >
            Tidak terhubung ke internet
          </Typography>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(20, 21, 17, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animated: {
    width: '70%',
    height: 'auto',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    gap: 20,
    backgroundColor: 'white',
  },
});

export default memo(NoInternet);
