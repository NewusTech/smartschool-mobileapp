import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import AttachmentInput from '@/components/ui/attachment/attachmentInput';
import BackButton from '@/components/ui/backButton';
import { Button } from '@/components/ui/button';
import ModalSuccess from '@/components/ui/modalSuccess';
import TextInput from '@/components/ui/textInput';
import {
  PostComplaintPayload,
  postComplaintPayloadSchema,
} from '@/services/pengaduan';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

const ComplaintFormScreen = () => {
  const { control } = useForm<PostComplaintPayload>({
    resolver: zodResolver(postComplaintPayloadSchema),
    mode: 'all',
  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit = () => {
    setIsSuccess(!isSuccess);
  };

  return (
    <ParallaxScrollView
      headerImage={<BackButton title="Buat Pengaduan Baru" />}
    >
      <ThemedView style={styles.container}>
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <TextInput
              label="Judul Pengaduan"
              placeholder="Judul Pengaduan"
              borderRadius={8}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
              textAlignVertical="top"
              multiline
              style={{ minHeight: 64 }}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <TextInput
              label="Isi Keterangan"
              placeholder="Isi Keterangan"
              borderRadius={8}
              numberOfLines={10}
              multiline
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
              textAlignVertical="top"
              hintMessage={`${field.value?.length || 0}/300`}
              style={{ minHeight: 100 }}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={() => <AttachmentInput label="Unggah File (Opsional)" />}
        />

        <Button onPress={onSubmit} style={{ elevation: 6, marginTop: 20 }}>
          Kirim
        </Button>
      </ThemedView>
      <ModalSuccess
        visible={isSuccess}
        setVisible={setIsSuccess}
        title="Pengaduan Berhasil Dikirim"
        subTitle="Harap menunggu 1 x 24 jam untuk pihak sekolah menjawab pengaduan kamu"
      />
    </ParallaxScrollView>
  );
};

export default ComplaintFormScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 24,
    gap: 16,
  },
});
