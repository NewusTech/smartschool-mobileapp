import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import Badge from '@/components/ui/badge';
import Header from '@/components/ui/header';
import Tabs from '@/components/ui/tabs';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';

interface IDataELeaning {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
  score?: number;
}

const ELearningScreen = () => {
  const router = useRouter();

  const [tabActive, setTabActive] = useState<number>(0);

  const DATA_SURVEY: IDataELeaning[] = [
    {
      id: 1,
      title: 'Matematika',
      description: 'Pengukuran Waktu dan Panjang',
      date: 'Senin, 12 Maret 2025 23:59',
      status: 'Belum Dikerjakan',
    },
    {
      id: 2,
      title: 'Bahasa Indonesia',
      description: 'Aku dan Teman Baru',
      date: 'Jumat, 17 Maret 2025 23:59',
      status: 'Selesai',
      score: 87,
    },
    {
      id: 3,
      title: 'Bahasa Indonesia',
      description: 'Aku dan Teman Baru',
      date: 'Jumat, 17 Maret 2025 23:59',
      status: 'Selesai',
      score: 87,
    },
    {
      id: 4,
      title: 'Bahasa Indonesia',
      description: 'Aku dan Teman Baru',
      date: 'Jumat, 17 Maret 2025 23:59',
      status: 'Selesai',
      score: 87,
    },
  ];

  const handleNavigateToDetail = (status: string) =>
    router.push({
      pathname: '/(authenticated)/materi/detail',
      params: { type: tabActive, status },
    });

  const renderItem = ({ item }: { item: IDataELeaning }) => (
    <Pressable
      onPress={() => handleNavigateToDetail(item.status)}
      style={styles.card}
    >
      <Typography fontSize={16} fontFamily="Poppins-Bold" color="primary-500">
        {item.title}
      </Typography>

      <Typography fontSize={12} color="text-secondary">
        Selesaikan sebelum {item.date}
      </Typography>

      {item.status === 'Selesai' ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>
            Nilai{' '}
            <Typography fontFamily="Poppins-Bold">{item.score}</Typography>
          </Typography>

          <Badge
            title={item.status}
            type="outlined"
            color="success-700"
            fontSize={12}
          />
        </View>
      ) : (
        <Badge
          title={item.status}
          type="outlined"
          color="error-500"
          position="left"
          fontSize={12}
        />
      )}
    </Pressable>
  );

  return (
    <ParallaxScrollView headerImage={<Header />}>
      <ThemedView style={styles.container}>
        <View style={{ marginTop: 12, gap: 16 }}>
          <FlatList
            scrollEnabled={false}
            data={DATA_SURVEY}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 12 }}
            ListHeaderComponent={
              <View>
                <Tabs
                  tabs={['E-Learning da...', 'Ujian']}
                  onTabChange={setTabActive}
                />

                <Typography
                  fontSize={16}
                  fontFamily="Poppins-Bold"
                  style={{ marginTop: 32 }}
                >
                  {tabActive === 0 ? 'E-Learning & Tugas' : 'Ujian'}
                </Typography>
              </View>
            }
          />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ELearningScreen;

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
