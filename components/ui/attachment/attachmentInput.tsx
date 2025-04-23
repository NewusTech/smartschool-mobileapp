import View from '@/components/view';
import { Feather } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native';
import { Button } from '../button';
import { Typography } from '../typography';

import { useAppTheme } from '@/context/theme-context';

interface IAttachmentInputProps {
  enabled?: boolean;
  fileName?: string;
  label: string;
}

const AttachmentInput = ({
  enabled = true,
  label,
  fileName = '',
}: IAttachmentInputProps) => {
  const { Colors } = useAppTheme();

  return (
    <View style={styles.container}>
      {label && (
        <Typography fontFamily="Poppins-Medium" fontSize={14}>
          {label}
        </Typography>
      )}

      {enabled ? (
        <>
          <View
            style={{
              borderColor: Colors['primary-500'],
              borderWidth: 2,
              borderRadius: 16,
              padding: 20,
              borderStyle: 'dashed',
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                gap: 12,
              }}
            >
              <Button
                style={{ elevation: 8, paddingHorizontal: 20 }}
                iconAfter={
                  <Feather name="upload" color={Colors.white} size={20} />
                }
              >
                Unggah
              </Button>
              <Typography fontSize={10} color="text-secondary">
                Maks. 1MB dengan format JPEG/PNG
              </Typography>
            </View>
          </View>
          <Typography
            fontSize={10}
            color="text-secondary"
            style={{ marginTop: 8 }}
          >
            Maks. 1MB dengan format JPEG/PNG
          </Typography>
        </>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: Colors['neutral-700'],
            borderRadius: 6,
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('@/assets/images/file_image.png')}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
            <Typography>{fileName}</Typography>
          </View>
          <Feather name="upload" size={18} color={Colors['primary-500']} />
        </View>
      )}
    </View>
  );
};

export default AttachmentInput;

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  inputWrapper: {
    borderWidth: 1,
    paddingHorizontal: 12,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
