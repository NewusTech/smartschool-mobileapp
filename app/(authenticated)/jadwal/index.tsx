import { FlatList, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import BackButton from '@/components/ui/backButton';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Loader from '@/components/ui/loader';
import ModalSwipe from '@/components/ui/modalSwipe';
import RadioButton from '@/components/ui/radioButton';
import Tabs from '@/components/ui/tabs';
import TextInput from '@/components/ui/textInput';
import { Typography } from '@/components/ui/typography';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';

export interface IDataSchedule {
  id: number;
  type: string;
  title: string;
  dateTime: string;
  status: string;
  day: number;
}

const DATA_DAY = [
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
  'Minggu',
];

export const DATA_SCHEDULE: IDataSchedule[] = [
  {
    id: 1,
    type: 'kegiatan',
    title: 'Upacara',
    dateTime: '07:30-08:30',
    status: 'Hadir',
    day: 0,
  },
  {
    id: 2,
    type: 'mapel',
    title: 'Matematika',
    dateTime: '07:30-08:30',
    status: 'Hadir',
    day: 1,
  },
  {
    id: 3,
    type: 'mapel',
    title: 'Ilmu Pengetahuan Alam',
    dateTime: '07:30-08:30',
    status: 'Hadir',
    day: 2,
  },
  {
    id: 4,
    type: 'kegiatan',
    title: 'Pramuka',
    dateTime: '07:30-08:30',
    status: '',
    day: 1,
  },
  {
    id: 5,
    type: 'mapel',
    title: 'Seni Budaya',
    dateTime: '07:30-08:30',
    status: '',
    day: 0,
  },
  {
    id: 6,
    type: 'mapel',
    title: 'Pendidikan Agama',
    dateTime: '07:30-08:30',
    status: 'Hadir',
    day: 1,
  },
];

const ScheduleScreen = () => {
  const router = useRouter();

  const [tabActive, setTabActive] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedAttendance, setSelectedAttendance] = useState<string>('');
  const [dataSchedule, setDataSchedule] = useState<IDataSchedule[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFormEvaluation = () =>
    router.push('/(authenticated)/jadwal/evaluasi');

  useEffect(() => {
    setDataSchedule(DATA_SCHEDULE.filter((item) => item.day === tabActive));
    setIsLoading(false);
  }, [tabActive]);

  const renderItem = ({ item }: { item: IDataSchedule }) => {
    return (
      <View key={item.id} style={styles.cardSchedule}>
        <View style={styles.borderSchedule}>
          <Typography fontFamily="Poppins-Bold">{item.title}</Typography>

          <Typography fontSize={12} color="text-secondary">
            {item.dateTime}
          </Typography>
        </View>

        {!item.status ? (
          <Button
            onPress={() => setShowModal(!showModal)}
            style={styles.buttonAbsent}
          >
            Absen
          </Button>
        ) : (
          <View style={{ alignItems: 'flex-end' }}>
            <Badge
              type="outlined"
              title="Hadir"
              fontSize={12}
              color="success-700"
            />
            {item.type === 'mapel' && (
              <Button
                onPress={handleFormEvaluation}
                variant="outlined"
                style={styles.buttonEvaluation}
              >
                Isi Evaluasi
              </Button>
            )}
          </View>
        )}
      </View>
    );
  };

  const renderFormAttendance = useMemo(
    () => (
      <ModalSwipe
        modalVisible={showModal}
        setModalVisible={setShowModal}
        title="Absen Mandiri"
      >
        <Typography
          color="text-secondary"
          fontSize={12}
          style={{
            marginTop: 8,
            marginBottom: 12,
          }}
        >
          Siswa yang tidak absen setelah jam mata pelajaran berakhir akan
          dianggap tidak hadir pada pertemuan.
        </Typography>

        {['Hadir', 'Tidak Hadir (Alpa)', 'Izin'].map((item) => (
          <View key={item} style={styles.optionAttendances}>
            <RadioButton
              onPress={() => setSelectedAttendance(item)}
              value={item}
              option={item}
              selected={selectedAttendance}
            />
            {item === 'Izin' && selectedAttendance === item && (
              <View style={{ marginTop: 8, marginLeft: 36 }}>
                <TextInput
                  style={{ minHeight: 82 }}
                  borderRadius={6}
                  numberOfLines={5}
                />
              </View>
            )}
          </View>
        ))}

        <Button style={styles.buttonSave}>Simpan</Button>
      </ModalSwipe>
    ),
    [selectedAttendance, showModal],
  );

  if (isLoading) return <Loader />;

  return (
    <ParallaxScrollView headerImage={<BackButton title="Jadwal Pelajaran" />}>
      <ThemedView style={styles.container}>
        <Tabs tabs={DATA_DAY} onTabChange={(tab) => setTabActive(tab)} />

        <View style={styles.header}>
          <Typography fontSize={16} fontFamily="Poppins-Bold">
            Jadwal Pelajaran Hari Ini
          </Typography>

          <Typography fontSize={12} fontFamily="Poppins-Light">
            {DATA_DAY[tabActive]}, 17 Maret 2025
          </Typography>
        </View>

        <FlatList
          style={{ rowGap: 12, marginTop: 16 }}
          data={dataSchedule}
          scrollEnabled={false}
          renderItem={renderItem}
        />
      </ThemedView>
      {showModal && renderFormAttendance}
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  cardSchedule: {
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAF2F9',
    width: '100%',
    minHeight: 67,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  optionAttendances: {
    padding: 12,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
  },
  borderSchedule: {
    borderLeftWidth: 2,
    borderLeftColor: '#297BBF',
    marginVertical: 24,
    paddingLeft: 8,
  },
  buttonAbsent: {
    paddingVertical: 0,
    paddingHorizontal: 16,
  },
  buttonEvaluation: {
    paddingVertical: 0,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  header: { marginTop: 12, paddingTop: 16 },
  buttonSave: {
    marginTop: 12,
    elevation: 6,
    paddingVertical: 6,
  },
});

export default ScheduleScreen;
