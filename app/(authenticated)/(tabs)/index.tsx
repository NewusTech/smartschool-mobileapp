import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import Avatar from '@/components/ui/avatar';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BarChart from '@/components/ui/chart/BarChart';
import GroupedBarChart from '@/components/ui/chart/GroupedBarChart';
import ProgressBarChart from '@/components/ui/chart/ProgressBarChart';
import Header from '@/components/ui/header';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { DATA_MENU } from '@/constants';
import { useRouter } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';

interface IDataReminderExam {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
  score?: number;
}

interface IDataSchedule {
  id: number;
  type: string;
  title: string;
  dateTime: string;
  status: string;
}

const DATA_REMINDER_EXAMS: IDataReminderExam[] = [
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
    description: 'Pengukuran Waktu dan Panjang',
    date: 'Senin, 12 Maret 2025 23:59',
    status: 'Selesai',
    score: 87,
  },
];

const DATA_SCHEDULE: IDataSchedule[] = [
  {
    id: 1,
    type: 'kegiatan',
    title: 'Upacara',
    dateTime: '07:30-08:30',
    status: 'Hadir',
  },
  {
    id: 2,
    type: 'mapel',
    title: 'Matematika',
    dateTime: '07:30-08:30',
    status: 'Hadir',
  },
  {
    id: 3,
    type: 'mapel',
    title: 'Ilmu Pengetahuan Alam',
    dateTime: '07:30-08:30',
    status: 'Hadir',
  },
  {
    id: 4,
    type: 'kegiatan',
    title: 'Pramuka',
    dateTime: '07:30-08:30',
    status: '',
  },
  {
    id: 5,
    type: 'mapel',
    title: 'Seni Budaya',
    dateTime: '07:30-08:30',
    status: '',
  },
  {
    id: 6,
    type: 'mapel',
    title: 'Pendidikan Agama',
    dateTime: '07:30-08:30',
    status: 'Hadir',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(false);

  const renderInformation = useMemo(
    () => (
      <ImageBackground
        source={require('../../../assets/images/backgroundProfile.png')}
        resizeMode="cover"
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar name="" source="image" size={32} />
          <View style={{ marginLeft: 12 }}>
            <Typography fontFamily="Poppins-Bold">Hi, Annisa Rachma</Typography>
            <Typography fontSize={12}>Kelas 1-A</Typography>
          </View>
        </View>

        <Button
          onPress={() => router.push('/(authenticated)/(tabs)/profile')}
          style={{
            paddingHorizontal: 20,
            elevation: 6,
          }}
        >
          Profil
        </Button>
      </ImageBackground>
    ),
    [router],
  );

  const renderMenu = useMemo(
    () => (
      <ThemedView
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Typography fontFamily="Poppins-Bold">Semua Menu</Typography>

        <FlatList
          data={DATA_MENU}
          scrollEnabled={false}
          numColumns={4}
          contentContainerStyle={{
            rowGap: 12,
            marginTop: 12,
          }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                item.path &&
                router.push(item.path as Parameters<typeof router.push>[0])
              }
              key={item.id}
              style={{
                alignItems: 'center',
                width: '20%',
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: '100%',
                  height: 64,
                  width: 64,
                  borderColor: '#EAF2F9',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'center',
                  }}
                />
              </View>

              <Typography
                color="text-secondary"
                fontSize={12}
                style={{ marginTop: 6 }}
              >
                {item.title}
              </Typography>
            </Pressable>
          )}
        />
      </ThemedView>
    ),
    [router],
  );

  const renderItem = useCallback(
    ({ item }: { item: IDataSchedule }) => {
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
                <Button variant="outlined" style={styles.buttonEvaluation}>
                  Isi Evaluasi
                </Button>
              )}
            </View>
          )}
        </View>
      );
    },
    [showModal],
  );

  const renderSchedule = useMemo(
    () => (
      <ThemedView
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Typography fontFamily="Poppins-Bold">
          Jadwal Pelajaran Hari Ini
        </Typography>

        <Typography fontSize={12}>Rabu, 17 Maret 2025</Typography>

        <View
          style={{
            rowGap: 12,
            marginTop: 12,
          }}
        >
          <FlatList
            style={{ rowGap: 12 }}
            data={DATA_SCHEDULE.slice(0, 3)}
            renderItem={renderItem}
            scrollEnabled={false}
          />
          <Button style={{ marginTop: 8, elevation: 6 }}>
            Tampilkan Semua
          </Button>
        </View>
      </ThemedView>
    ),
    [renderItem],
  );

  const renderChartScore = useMemo(
    () => (
      <ThemedView
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          Nilai Rata-Rata UTS/UAS
        </Typography>

        <Typography fontSize={12} color="text-secondary">
          Tahun Ajaran 2024/2025
        </Typography>

        <ThemedView
          style={{
            rowGap: 12,
            marginTop: 12,
          }}
        >
          <GroupedBarChart
            labels={['1', '2', '3', '4', '5', '6']}
            data1={[50, 20, 2, 86, 71, 100]}
            data2={[30, 60, 15, 45, 80, 25]}
            barColor1="#297BBF"
            barColor2="#BDD6EB"
            screenWidth={Dimensions.get('window').width - 100}
          />
        </ThemedView>
      </ThemedView>
    ),
    [],
  );

  const renderChartAverageTime = useMemo(
    () => (
      <ThemedView
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          Waktu Rata-Rata Mengerjakan Tugas dan Ujian
        </Typography>

        <Typography fontSize={12} color="text-secondary">
          Tahun Ajaran 2024/2025
        </Typography>

        <ThemedView
          style={{
            rowGap: 12,
            marginTop: 12,
          }}
        >
          <View>
            <BarChart
              data={[
                { label: 'Tugas', value: 70, color: '#297BBF' },
                { label: 'Ujian', value: 54, color: '#BBDEFB' },
              ]}
            />
          </View>
        </ThemedView>
      </ThemedView>
    ),
    [],
  );

  const renderChartForumDiscussion = useMemo(
    () => (
      <ThemedView
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          Keaktifan Forum Diskusi
        </Typography>

        <Typography fontSize={12} color="text-secondary">
          Tahun Ajaran 2024/2025
        </Typography>

        <ProgressBarChart
          value={75}
          screenWidth={Dimensions.get('window').width / 2.5}
          strokeWidth={18}
        />
      </ThemedView>
    ),
    [],
  );

  const renderItemReminder = useCallback(
    ({ item }: { item: IDataReminderExam }) => (
      <View
        style={{
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#F1F1F1',
          backgroundColor: '#FFFFFF',
          gap: 6,
        }}
      >
        <Typography color="primary-500" fontFamily="Poppins-Bold" fontSize={16}>
          {item.title}
        </Typography>

        <Typography>{item.description}</Typography>
        <Typography fontSize={12}>Selesaikan Sebelum: {item.date}</Typography>

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
      </View>
    ),
    [],
  );

  const reminderExam = useMemo(
    () => (
      <ImageBackground
        source={require('../../../assets/images/backgroundReminderExam.png')}
        resizeMode="cover"
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          padding: 16,
          flex: 1,
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          Pengingat Tugas dan Ujian
        </Typography>

        <FlatList
          data={DATA_REMINDER_EXAMS}
          renderItem={renderItemReminder}
          scrollEnabled={false}
          contentContainerStyle={{
            gap: 12,
            marginTop: 12,
          }}
        />
      </ImageBackground>
    ),
    [renderItemReminder],
  );

  const iconAttendance = useCallback((type: string) => {
    switch (type) {
      case 'Izin':
        return (
          <View
            style={[styles.iconAttendance, { backgroundColor: 'orange' }]}
          />
        );

      case 'Hadir':
        return (
          <View style={[styles.iconAttendance, { backgroundColor: 'green' }]} />
        );

      default:
        return (
          <View style={[styles.iconAttendance, { backgroundColor: 'red' }]} />
        );
    }
  }, []);

  const renderAttendancePercentage = useMemo(
    () => (
      <ThemedView
        style={{ marginHorizontal: 20, borderRadius: 6, marginBottom: 20 }}
      >
        <View style={styles.cardAttendance}>
          <Typography fontSize={16} fontFamily="Poppins-Bold">
            Presentase Kehadiran Siswa
          </Typography>

          <View style={styles.containerAttendancePercentage}>
            <View style={styles.attendancePercentage}>
              {iconAttendance('Hadir')}
              <Typography style={{ marginTop: 6 }} fontFamily="Poppins-Bold">
                13 (100%)
              </Typography>
              <Typography color="text-secondary" fontSize={12}>
                Siswa Hadir
              </Typography>
            </View>

            <View style={styles.attendancePercentage}>
              {iconAttendance('Izi')}
              <Typography style={{ marginTop: 6 }} fontFamily="Poppins-Bold">
                1 (1%)
              </Typography>
              <Typography color="text-secondary" fontSize={12}>
                Siswa Izin
              </Typography>
            </View>

            <View style={styles.attendancePercentage}>
              {iconAttendance('Tidak Hadir')}
              <Typography style={{ marginTop: 6 }} fontFamily="Poppins-Bold">
                0 (0%)
              </Typography>
              <Typography
                color="text-secondary"
                fontSize={12}
                style={styles.labelAbsent}
              >
                Siswa Tidak Hadir
              </Typography>
            </View>
          </View>
        </View>
      </ThemedView>
    ),
    [iconAttendance],
  );

  return (
    <ParallaxScrollView headerImage={<Header />}>
      {renderInformation}
      {renderMenu}
      {renderSchedule}
      {renderChartScore}
      {renderChartAverageTime}
      {renderChartForumDiscussion}
      {reminderExam}
      {renderAttendancePercentage}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  itemSchedule: {
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#EAF2F9',
    width: '100%',
    height: 67,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: { alignItems: 'center', marginTop: 20 },
  tooltip: {
    position: 'absolute',
    top: 50,
    left: 100,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardSchedule: {
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#EAF2F9',
    width: '100%',
    minHeight: 67,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
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
  cardAttendance: {
    borderRadius: 8,
    padding: 16,
  },
  containerAttendancePercentage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    rowGap: 8,
    marginTop: 12,
  },
  attendancePercentage: {
    borderWidth: 0.5,
    borderRadius: 8,
    height: 120,
    width: 120,
    borderColor: '#EAF2F9',
    justifyContent: 'flex-start',
    padding: 12,
  },
  labelAbsent: { flexWrap: 'wrap', lineHeight: 16 },
  iconAttendance: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
});
