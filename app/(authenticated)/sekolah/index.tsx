import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import FieldValue from '@/components/ui/fieldValue';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { StyleSheet } from 'react-native';

const InformationSchoolScreen = () => {
  return (
    <ParallaxScrollView title="Informasi Sekolah">
      <ThemedView style={styles.container}>
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          SDN Kebayoran Lama Utara 09 Pagi
        </Typography>

        <View style={{ marginTop: 12, gap: 16 }}>
          <FieldValue label="NPSN" value="20112193" />
          <FieldValue label="Status" value="Negeri" />
          <FieldValue label="Akreditasi" value="A" />
          <FieldValue
            label="Implementasi Kurikulum"
            value="Kurikulum Merdeka"
          />
          <FieldValue label="Tahun Ajaran Implementasi" value="2023/2024" />
          <FieldValue label="Kepala Sekolah" value="Willy Christianto" />
          <FieldValue label="Provinsi" value="DKI Jakarta" />
          <FieldValue label="Kabupaten" value="Jakarta Selatan" />
          <FieldValue label="Kecamatan" value="Kebayoran" />
          <FieldValue label="Kelurahan / Desa" value="Kebayoran Lama" />
          <FieldValue label="Alamat" value="Jl. Delman Asri IX No. 15" />
          <FieldValue label="RT/RW" value="06 / 11" />
          <FieldValue label="Kode Pos" value="12240" />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default InformationSchoolScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 24,
  },
});
