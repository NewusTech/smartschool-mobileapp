import { ImageSourcePropType } from 'react-native';

export const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const DEVELOPMENT_MODE =
  process.env.EXPO_PUBLIC_DEVELOPMENT_MODE === 'true';

export const formatCurrency = (amount: number) => {
  // Check if the number is valid
  if (isNaN(amount)) {
    amount = 0;
  }

  // Create Intl.NumberFormat object for Indonesian Rupiah
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Format the number into IDR currency
  return formatter.format(amount);
};

type AppRoute =
  | '/(authenticated)/(tabs)/absensi'
  | '/(authenticated)/siswa'
  | '/(authenticated)/jadwal'
  | '/(authenticated)/(tabs)/materi'
  | '/(authenticated)/rapor'
  | '/(authenticated)/sekolah'
  | '/(authenticated)/survei'
  | '/(authenticated)/pengaduan';
interface IDataMenu {
  id: number;
  title: string;
  icon: ImageSourcePropType;
  path?: AppRoute;
}

export const DATA_MENU: IDataMenu[] = [
  {
    id: 1,
    title: 'Absensi',
    icon: require('../assets/images/absensi.png'),
    path: '/(authenticated)/(tabs)/absensi',
  },
  {
    id: 2,
    title: 'Siswa',
    icon: require('../assets/images/siswa.png'),
    path: '/(authenticated)/siswa',
  },
  {
    id: 3,
    title: 'Jadwal',
    icon: require('../assets/images/jadwal.png'),
    path: '/(authenticated)/jadwal',
  },
  {
    id: 4,
    title: 'Materi',
    icon: require('../assets/images/materi.png'),
    path: '/(authenticated)/(tabs)/materi',
  },
  {
    id: 5,
    title: 'E-Rapor',
    icon: require('../assets/images/e-rapor.png'),
    path: '/(authenticated)/rapor',
  },
  {
    id: 6,
    title: 'Sekolah',
    icon: require('../assets/images/sekolah.png'),
    path: '/(authenticated)/sekolah',
  },
  {
    id: 7,
    title: 'Survei',
    icon: require('../assets/images/survei.png'),
    path: '/(authenticated)/survei',
  },
  {
    id: 8,
    title: 'Pengaduan',
    icon: require('../assets/images/pengaduan.png'),
    path: '/(authenticated)/pengaduan',
  },
];
