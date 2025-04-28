import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import AttachmentInput from '@/components/ui/attachment/attachmentInput';
import Badge from '@/components/ui/badge';
import TextInput from '@/components/ui/textInput';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

const ComplaintDetailScreen = () => {
  const { status } = useLocalSearchParams();

  return (
    <ParallaxScrollView title="Pengaduan Terkirim">
      <ThemedView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography fontSize={12} color="text-secondary">
            Senin, 12 Maret 2025 23:59
          </Typography>
          <Badge
            title={status as string}
            type="outlined"
            fontSize={12}
            color={status === 'Selesai' ? 'success-700' : 'text-default'}
            position="auto"
          />
        </View>

        <TextInput
          label="Judul Pengaduan"
          placeholder="Judul Pengaduan"
          borderRadius={8}
          value="Kesalahan Input Peringkat Guru"
          editable={false}
        />

        <TextInput
          label="Isi Keterangan"
          placeholder="Isi Keterangan"
          borderRadius={8}
          numberOfLines={10}
          multiline
          value="sajsas;os;ask;lask;lasla;saks;aslaa"
          textAlignVertical="top"
          hintMessage={`${'sajsas;os;ask;lask;lasla;saks;aslaa'.length || 0}/300`}
          editable={false}
          style={{ minHeight: 100 }}
        />

        <AttachmentInput
          enabled={false}
          label="Unggah File (Opsional)"
          fileName="File.pdf"
        />

        {status === 'Selesai' && (
          <View
            style={{
              gap: 12,
              borderTopWidth: 1,
              borderTopColor: '#C7C7CD',
              paddingTop: 16,
              marginTop: 16,
            }}
          >
            <Typography fontFamily="Poppins-Bold" fontSize={16}>
              Jawaban Pengaduan
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              at nibh rhoncus, auctor nunc faucibus, sodales felis. Aliquam
              pellentesque iaculis urna quis congue. Maecenas ultrices in nisl
              pretium tincidunt.
            </Typography>

            <Typography color="text-secondary" fontSize={12}>
              Senin, 12 Maret 2025 23:59 dijawab oleh Ahmad Sauki
            </Typography>
          </View>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ComplaintDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 24,
    gap: 16,
    paddingBottom: 32,
  },
});
