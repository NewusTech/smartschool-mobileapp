import View from '@/components/view';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, Modal } from 'react-native';

import { Button } from '../button';
import Loader from '../loader';
import { Typography } from '../typography';

type ModalAction = {
  visible: boolean;
  onAction: () => void;
  isLoading: boolean;
  title?: string;
  onNegativeAction?: () => void;
};

export default function ModalAction({
  visible,
  onAction,
  onNegativeAction,
  isLoading = false,
  title = 'Keluar dari Smartschool?',
}: ModalAction) {
  const translateY = useRef(new Animated.Value(300)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [opacity, translateY, visible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: '100%',
          zIndex: 90,
        }}
      >
        <Animated.View
          style={{
            transform: [{ translateY }],
            opacity,
            paddingVertical: 30,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: 'white',
            alignItems: 'center',
            gap: 20,
            margin: 'auto',
            width: '80%',
          }}
        >
          <Image
            source={require('../../../assets/images/question.png')}
            style={{
              width: 60,
              height: 60,
              alignSelf: 'center',
            }}
          />
          <Typography
            fontFamily="Poppins-SemiBold"
            fontSize={16}
            color="black"
            style={{ textAlign: 'center' }}
          >
            {title}
          </Typography>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <View style={{ width: '50%' }}>
              <Button variant="outlined" onPress={onNegativeAction}>
                Batal
              </Button>
            </View>

            <View style={{ width: '50%' }}>
              <Button onPress={onAction}>
                {isLoading ? (
                  <Loader color="white" size={24} />
                ) : (
                  <Typography
                    fontFamily="Poppins-Medium"
                    fontSize={14}
                    color="white"
                  >
                    Ya
                  </Typography>
                )}
              </Button>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
