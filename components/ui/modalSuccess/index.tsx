import View from '@/components/view';
import React from 'react';
import { Dimensions, Image, Modal, Pressable } from 'react-native';
import { Button } from '../button';
import { Typography } from '../typography';

type ModalAction = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title?: string;
  subTitle?: string;
  labelButton?: string;
  onButtonPositive?: () => void;
};

export default function ModalSuccess({
  visible,
  setVisible,
  title = 'Selamat kamu sudah melamar!!',
  subTitle = 'Check lebih lanjut lamaran kamu di Riwayat Pekerjaan',
  labelButton = '',
  onButtonPositive,
}: ModalAction) {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <Pressable
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(20, 21, 17, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setVisible(false)}
      >
        <View
          backgroundColor="white"
          style={{
            width: '80%',
            height: 'auto',
            paddingVertical: 32,
            paddingHorizontal: 24,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Image
            source={require('@/assets/images/success.png')}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />

          <Typography fontFamily="Poppins-Bold" fontSize={16}>
            {title}
          </Typography>
          <Typography
            fontSize={14}
            color="black-50"
            style={{ textAlign: 'center' }}
          >
            {subTitle}
          </Typography>

          {!!onButtonPositive && (
            <Button
              style={{
                width: Dimensions.get('screen').width - 120,
                elevation: 6,
              }}
              onPress={onButtonPositive}
            >
              {labelButton}
            </Button>
          )}
        </View>
      </Pressable>
    </Modal>
  );
}
