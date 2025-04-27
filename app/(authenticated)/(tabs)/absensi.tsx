import { FlatList, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

import { ThemedView } from '@/components/ThemedView';
import Loader from '@/components/ui/loader';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import React, { useCallback, useEffect, useState } from 'react';

export enum TypeAttendances {
  Present = 'Hadir',
  Permission = 'Izin',
  Absent = 'Tidak Hadir',
}

type TypeAttendance = keyof Record<TypeAttendances, string>;

interface IDataAttendance {
  id: number;
  date: string;
  clockIn: string;
  type: TypeAttendance;
  description?: string;
}

export const DATA_ATTENDANCE: IDataAttendance[] = [
  {
    id: 1,
    date: 'Senin, 10 Maret 2025',
    clockIn: '06:30',
    type: TypeAttendances.Present,
  },
  {
    id: 2,
    date: 'Jumat, 14 Maret 2025',
    clockIn: '',
    type: TypeAttendances.Absent,
  },
  {
    id: 3,
    date: 'Rabu, 12 Maret 2025',
    clockIn: '',
    type: TypeAttendances.Permission,
    description: 'Acara Keluarga',
  },
  {
    id: 4,
    date: 'Kamis, 13 Maret 2025',
    clockIn: '06:47',
    type: TypeAttendances.Present,
  },
  {
    id: 5,
    date: 'Selasa, 11 Maret 2025',
    clockIn: '06:30',
    type: TypeAttendances.Present,
  },
];

export default function AttendanceScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const iconAttendance = useCallback((type: string) => {
    switch (type) {
      case TypeAttendances.Permission:
        return (
          <View
            style={[styles.iconAttendance, { backgroundColor: 'orange' }]}
          />
        );
      case TypeAttendances.Present:
        return (
          <View style={[styles.iconAttendance, { backgroundColor: 'green' }]} />
        );
      default:
        return (
          <View style={[styles.iconAttendance, { backgroundColor: 'red' }]} />
        );
    }
  }, []);

  const renderItem = ({ item }: { item: IDataAttendance }) => {
    return (
      <View key={item.id} style={styles.containerAttendanceList}>
        <View style={styles.itemAttendance}>
          {iconAttendance(item.type)}
          <View style={{ marginLeft: 6, flex: 1 }}>
            <Typography color="text-secondary" fontSize={12}>
              {item.date}
            </Typography>
            <View style={styles.itemTypeAttendance}>
              <Typography fontFamily="Poppins-Bold">{item.type}</Typography>
              {item.type === TypeAttendances.Present && (
                <Typography fontSize={12} color="success-700">
                  Absen Masuk {item.clockIn}
                </Typography>
              )}
            </View>
            {item.type === TypeAttendances.Permission && (
              <Typography color="text-secondary" fontSize={12}>
                Ket: {item.description}
              </Typography>
            )}
          </View>
        </View>
      </View>
    );
  };

  if (isLoading) return <Loader />;

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.container}>
        <View style={styles.cardAttendance}>
          <Typography fontSize={14} fontFamily="Poppins-Bold">
            Presentase Kehadiran Siswa
          </Typography>

          <View style={styles.containerAttendancePercentage}>
            <View style={styles.attendancePercentage}>
              {iconAttendance(TypeAttendances.Present)}
              <Typography style={{ marginTop: 6 }} fontFamily="Poppins-Bold">
                13 (100%)
              </Typography>
              <Typography color="text-secondary" fontSize={12}>
                Siswa Hadir
              </Typography>
            </View>

            <View style={styles.attendancePercentage}>
              {iconAttendance(TypeAttendances.Permission)}
              <Typography style={{ marginTop: 6 }} fontFamily="Poppins-Bold">
                1 (1%)
              </Typography>
              <Typography color="text-secondary" fontSize={12}>
                Siswa Izin
              </Typography>
            </View>

            <View style={styles.attendancePercentage}>
              {iconAttendance(TypeAttendances.Absent)}
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

      <ThemedView style={styles.attendanceList}>
        <View style={styles.cardAttendance}>
          <Typography fontFamily="Poppins-Bold">Daftar Absensi</Typography>
          <Typography fontSize={12}>Maret 2025</Typography>

          <FlatList
            data={DATA_ATTENDANCE}
            renderItem={renderItem}
            scrollEnabled={false}
            contentContainerStyle={{ gap: 12, marginTop: 12 }}
          />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 20, borderRadius: 6, marginTop: 24 },
  iconAttendance: {
    width: 20,
    height: 20,
    borderRadius: 5,
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
    maxWidth: 120,
    borderColor: '#EAF2F9',
    justifyContent: 'flex-start',
    padding: 12,
  },
  containerAttendanceList: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    flex: 1,
  },
  labelClockIn: {
    fontSize: 12,
    color: '#388E3C',
    alignSelf: 'center',
  },
  labelAbsent: { flexWrap: 'wrap', lineHeight: 16 },
  attendanceList: { marginHorizontal: 20, borderRadius: 6, marginVertical: 20 },
  itemAttendance: { flexDirection: 'row', alignItems: 'flex-start', flex: 1 },
  itemTypeAttendance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
