import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
  Animated,
  Modal,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Typography } from '../typography';

type ModalSwipeProp = {
  children: React.ReactNode;
  setModalVisible: (value: boolean) => void;
  modalVisible: boolean;
  title?: string;
};

export default function ModalSwipe(props: ModalSwipeProp) {
  const { children, setModalVisible, modalVisible, title = '' } = props;

  const pan = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return gestureState.dy > 0 || gestureState.dy < 0; // Tangani swipe ke atas dan ke bawah
    },
    onPanResponderMove: (evt, gestureState) => {
      // Batasi pergerakan ke atas dan ke bawah
      if (gestureState.dy >= 0) {
        pan.setValue({ x: 0, y: gestureState.dy });
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dy > 100) {
        // Jika swipe cukup jauh, tutup modal
        Animated.timing(pan, {
          toValue: { x: 0, y: 1000 },
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          setModalVisible(false);
          pan.setValue({ x: 0, y: 0 });
        });
      } else {
        // Jika tidak cukup jauh, kembalikan modal ke posisi semula
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View
        // intensity={100}
        // blurReductionFactor={100}
        // experimentalBlurMethod="dimezisBlurView"
        style={styles.modalOverlay}
      >
        <Animated.View
          style={[styles.modalContent, { transform: [{ translateY: pan.y }] }]}
          {...panResponder.panHandlers}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography fontFamily="Poppins-Bold" fontSize={18}>
              {title}
            </Typography>
            <TouchableOpacity
              style={{ position: 'relative' }}
              onPress={() => setModalVisible(false)}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 10 }}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(20, 21, 17, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
