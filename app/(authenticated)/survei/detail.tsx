import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import BackButton from '@/components/ui/backButton';
import { Button } from '@/components/ui/button';
import ModalSuccess from '@/components/ui/modalSuccess';
import RadioButton from '@/components/ui/radioButton';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

interface IDataSurvey {
  id: number;
  title: string;
  date: string;
  status: string;
}

const SurveyDetailScreen = () => {
  const router = useRouter();

  const [answer, setAnswer] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const DATA_SURVEY: IDataSurvey[] = [
    {
      id: 1,
      title: 'Dari skala 1-5, menurut Anda berapa tingkat kebersihan sekolah',
      date: 'Senin, 12 Maret 2025 23:59',
      status: 'Belum Dikerjakan',
    },
    {
      id: 2,
      title: 'Survei Kepuasaan Metode dan Pengajaran Guru',
      date: 'Jumat, 17 Maret 2025 23:59',
      status: 'Selesai',
    },
  ];

  const handleSubmit = () => setIsSuccess(!isSuccess);

  const renderItem = ({
    item,
    index,
  }: {
    item: IDataSurvey;
    index: number;
  }) => (
    <View style={[styles.card, { marginTop: index === 0 ? -16 : 16 }]}>
      <Typography>{item.title}</Typography>

      <Typography style={{ marginTop: 12, marginBottom: -6 }}>
        Pilih Jawaban
      </Typography>

      {[
        '5 (Sangat Bersih)',
        '4 (Bersih)',
        '3 (Lumayan Bersih',
        '2 (Kurang Bersih)',
        '1 (Sangat Kotor)',
      ].map((item) => (
        <View key={item} style={styles.optionAnswer}>
          <RadioButton
            onPress={() => setAnswer(item)}
            value={item}
            option={item}
            selected={answer}
          />
        </View>
      ))}
    </View>
  );

  return (
    <ParallaxScrollView headerImage={<BackButton title="Pengisian Survei" />}>
      <ThemedView style={styles.container}>
        <View>
          <Typography
            fontSize={16}
            fontFamily="Poppins-Bold"
            color="primary-500"
          >
            Survei Kepuasan Lingkungan Sekolah
          </Typography>

          <Typography fontSize={12}>
            Kami memohon ketersediaan bapak dan ibu untuk mengisi survei
            kepuasan berikut sebelum senin, 12 Maret 2025 23:59. Terima kasih.
          </Typography>
        </View>
      </ThemedView>

      <ThemedView style={[styles.container, { marginBottom: 20 }]}>
        <View style={{ marginTop: 12, gap: 16 }}>
          <FlatList
            scrollEnabled={false}
            data={DATA_SURVEY}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 12 }}
          />

          <Button onPress={handleSubmit} style={styles.buttonSave}>
            Kirim Jawaban
          </Button>
        </View>
      </ThemedView>
      {isSuccess && (
        <ModalSuccess
          visible={isSuccess}
          setVisible={setIsSuccess}
          labelButton="Keluar"
          onButtonPositive={() => router.back()}
          title="Jawaban berhasil dikirim"
          subTitle="Terima kasih telah mengisi survei evaluasi"
        />
      )}
    </ParallaxScrollView>
  );
};

export default SurveyDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
  },
  card: {
    padding: 12,
    gap: 6,
  },
  optionAnswer: {
    padding: 12,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 6,
  },
  buttonSave: {
    marginTop: 24,
    elevation: 6,
    paddingVertical: 6,
  },
});
