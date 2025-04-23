import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import BackButton from '@/components/ui/backButton';
import Badge from '@/components/ui/badge';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet } from 'react-native';

interface IDataSurvey {
  id: number;
  title: string;
  date: string;
  status: string;
}

const SurveyScreen = () => {
  const router = useRouter();

  const DATA_SURVEY: IDataSurvey[] = [
    {
      id: 1,
      title: 'Survei Kepuasaan Lingkungan Sekolah',
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

  const handleNavigateToDetail = () =>
    router.push('/(authenticated)/survei/detail');

  const renderItem = ({ item }: { item: IDataSurvey }) => (
    <Pressable onPress={handleNavigateToDetail} style={styles.card}>
      <Typography fontSize={16} fontFamily="Poppins-Bold" color="primary-500">
        {item.title}
      </Typography>

      <Typography fontSize={12} color="text-secondary">
        Selesaikan sebelum {item.date}
      </Typography>

      <Badge
        title={item.status}
        type="outlined"
        fontSize={12}
        color={item.status === 'Selesai' ? 'success-700' : 'error-500'}
        position="auto"
      />
    </Pressable>
  );

  return (
    <ParallaxScrollView headerImage={<BackButton title="Survei" />}>
      <ThemedView style={styles.container}>
        <View>
          <Typography fontSize={16} fontFamily="Poppins-Bold">
            Daftar Survei
          </Typography>
        </View>

        <View style={{ marginTop: 12, gap: 16 }}>
          <FlatList
            scrollEnabled={false}
            data={DATA_SURVEY}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 12 }}
          />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 8,
    padding: 12,
    gap: 6,
  },
});
