import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import BackButton from '@/components/ui/backButton';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet } from 'react-native';

interface IDataComplaint {
  id: number;
  title: string;
  date: string;
  status: string;
}

const ComplaintScreen = () => {
  const router = useRouter();

  const DATA_SURVEY: IDataComplaint[] = [
    {
      id: 1,
      title: 'Survei Kepuasaan Lingkungan Sekolah',
      date: 'Senin, 12 Maret 2025 23:59',
      status: 'Belum Dijawab',
    },
    {
      id: 2,
      title: 'Survei Kepuasaan Metode dan Pengajaran Guru',
      date: 'Jumat, 17 Maret 2025 23:59',
      status: 'Selesai',
    },
  ];

  const handleNavigateToDetail = (status: string) =>
    router.push({
      pathname: '/(authenticated)/pengaduan/detail',
      params: { status },
    });

  const handleAddComplaint = () =>
    router.push('/(authenticated)/pengaduan/form');

  const renderItem = ({ item }: { item: IDataComplaint }) => (
    <Pressable
      onPress={() => handleNavigateToDetail(item.status)}
      style={styles.card}
    >
      <Typography fontSize={12} color="text-secondary">
        {item.date}
      </Typography>

      <Typography fontSize={16} fontFamily="Poppins-Bold" color="primary-500">
        {item.title}
      </Typography>

      <Badge
        title={item.status}
        type="outlined"
        fontSize={12}
        color={item.status === 'Selesai' ? 'success-700' : 'text-default'}
        position="auto"
      />
    </Pressable>
  );

  return (
    <ParallaxScrollView headerImage={<BackButton title="Daftar Pengaduan" />}>
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <Typography fontSize={16} fontFamily="Poppins-Bold">
            Pengaduan
          </Typography>
          <Button
            onPress={handleAddComplaint}
            style={{ elevation: 6, paddingHorizontal: 10 }}
          >
            Buat Pengaduan
          </Button>
        </View>

        <FlatList
          scrollEnabled={false}
          data={DATA_SURVEY}
          renderItem={renderItem}
          style={{ marginTop: 12 }}
          contentContainerStyle={{ gap: 12 }}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ComplaintScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 8,
    padding: 12,
    gap: 6,
  },
});
