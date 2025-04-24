import View from '@/components/view';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, ImageSourcePropType, Modal } from 'react-native';

import { Button } from '../button';
import Loader from '../loader';
import { Typography } from '../typography';

type ModalAction = {
  image?: ImageSourcePropType;
  visible: boolean;
  onAction: () => void;
  isLoading: boolean;
  title?: string;
  description?: string;
  labelPositive?: string;
  labelNegative?: string;
  onNegativeAction?: () => void;
};

export default function ModalAction({
  image = require('../../../assets/images/question.png'),
  visible,
  onAction,
  onNegativeAction,
  isLoading = false,
  labelNegative = 'Batal',
  labelPositive = 'Ya',
  title = '',
  description = '',
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
            paddingHorizontal: 16,
            borderRadius: 20,
            backgroundColor: 'white',
            alignItems: 'center',
            gap: 12,
            margin: 'auto',
            width: '80%',
          }}
        >
          <Image
            source={image}
            style={{
              width: 60,
              height: 60,
              alignSelf: 'center',
            }}
          />
          <Typography fontFamily="Poppins-Bold" style={{ textAlign: 'center' }}>
            {title}
          </Typography>

          {!!description && (
            <Typography style={{ textAlign: 'center' }}>
              {description}
            </Typography>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <View style={{ width: '50%' }}>
              <Button variant="outlined" onPress={onNegativeAction}>
                {labelNegative}
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
                    {labelPositive}
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
