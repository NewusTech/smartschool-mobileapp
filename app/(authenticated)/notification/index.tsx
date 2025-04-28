import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import SafeAreaView from '@/components/ui/safeAreaView';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';

interface IDataNotification {
  id: number;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

const DATA_NOTIFICATION: IDataNotification[] = [
  {
    id: 1,
    title: 'Perubahan Password Berhasil!',
    description:
      'Perubahan password untuk aplikasi Smartschool pada 10 Nov 2024 jam 17:04 WIB',
    time: '2 menit lalu',
    isRead: false,
  },
  {
    id: 2,
    title: 'E-Learning dan Tugas',
    description:
      'E-Learning dan Tugas Matematika Pengukuran Waktu dan Panjang sudah tayang. Selesaikan sebelum Senin, 12 Maret 2025 23:59',
    time: 'kemarin',
    isRead: true,
  },
  {
    id: 3,
    title: 'E-Learning dan Tugas',
    description:
      'E-Learning dan Tugas Matematika Pengukuran Waktu dan Panjang sudah tayang. Selesaikan sebelum Senin, 12 Maret 2025 23:59',
    time: '2 menit lalu',
    isRead: true,
  },
];

const NotificationScreen = () => {
  const [isExpand, setIsExpand] = useState<boolean[]>([]);

  const handleExpand = (index: number) => {
    setIsExpand(isExpand.map((value, i) => (i === index ? !value : value)));
  };

  useEffect(() => setIsExpand(DATA_NOTIFICATION.map(() => false)), []);

  const renderItem = ({
    item,
    index,
  }: {
    item: IDataNotification;
    index: number;
  }) => {
    return (
      <View style={styles.item}>
        <Typography color={item.isRead ? 'text-tersier' : 'text-secondary'}>
          {item.time}
        </Typography>
        <Typography
          color={item.isRead ? 'text-tersier' : 'text-default'}
          fontFamily="Poppins-Bold"
        >
          {item.title}
        </Typography>
        <Typography
          color={item.isRead ? 'text-tersier' : 'text-default'}
          numberOfLines={isExpand[index] ? 5 : 1}
        >
          {item.description}
        </Typography>
        <Pressable onPress={() => handleExpand(index)}>
          <Typography color="primary-500" fontFamily="Poppins-Bold">
            {isExpand[index] ? 'Lebih Sedikit' : 'Selengkapnya'}
          </Typography>
        </Pressable>
      </View>
    );
  };

  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView title="Notifikasi">
        <ThemedView style={styles.card}>
          <View style={styles.containerHeader}>
            <Typography fontFamily="Poppins-Bold">Notifikasi</Typography>
            <Pressable>
              <Typography color="primary-500" fontFamily="Poppins-Bold">
                Tandai Semua
              </Typography>
            </Pressable>
          </View>

          <FlatList
            data={DATA_NOTIFICATION}
            renderItem={renderItem}
            style={styles.container}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={renderSeparator}
            scrollEnabled={false}
          />
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginTop: 32,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E7E7E7',
    marginTop: 10,
  },
  item: { padding: 12, gap: 6 },
  container: { marginTop: 24, paddingBottom: 32 },
});
