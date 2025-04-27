import { IconCamera, IconGallery } from '@/components/icons';
import { memo } from 'react';
import { Alert, Pressable, StyleSheet } from 'react-native';
import ModalSwipe from '../modalSwipe';
import { Typography } from '../typography';

import * as ImagePicker from 'expo-image-picker';

export interface ImageResult {
  uri: string;
  width: number;
  height: number;
  fileName?: string;
  fileSize?: number;
}

interface IModalAttachmentProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  onUploadFile?: (file: ImageResult) => void;
  showDocument?: boolean;
}

const ModalAttachment = ({
  isVisible = false,
  setIsVisible,
  onUploadFile,
  showDocument = false,
}: IModalAttachmentProps) => {
  const handleImageResult = (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      const imageInfo: ImageResult = {
        uri: selectedAsset.uri,
        width: selectedAsset.width,
        height: selectedAsset.height,
        fileName: selectedAsset.fileName || '',
        fileSize: selectedAsset.fileSize,
      };

      onUploadFile?.(imageInfo);
    }
  };

  const handleGalleryPress = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert('Permission denied', 'You need to allow access to photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleImageResult(result);
  };

  const handleCameraPress = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleImageResult(result);
  };

  const handleDocumentPress = () => {};

  return (
    <ModalSwipe
      title="Ubah Foto"
      modalVisible={isVisible}
      setModalVisible={setIsVisible}
    >
      <Pressable onPress={handleGalleryPress} style={styles.option}>
        <IconGallery color="text-default" />
        <Typography color="text-secondary">Pilih Dari Galeri</Typography>
      </Pressable>

      <Pressable onPress={handleCameraPress} style={styles.option}>
        <IconCamera color="text-default" />
        <Typography color="text-secondary">Ambil Foto</Typography>
      </Pressable>

      {showDocument && (
        <Pressable onPress={handleDocumentPress} style={styles.option}>
          <IconCamera color="text-default" />
          <Typography color="text-secondary">Dokumen</Typography>
        </Pressable>
      )}
    </ModalSwipe>
  );
};

const styles = StyleSheet.create({
  option: { paddingVertical: 8, flexDirection: 'row', columnGap: 8 },
});

export default memo(ModalAttachment);
