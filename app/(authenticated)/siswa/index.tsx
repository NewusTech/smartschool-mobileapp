import { FlatList, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import Avatar from '@/components/ui/avatar';
import BackButton from '@/components/ui/backButton';
import TextInput from '@/components/ui/textInput';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

const DATA_STUDENT = [
  {
    id: 1,
    name: 'Annisa Rachma',
    gender: 'Perempuan',
    telephone: '0857332819211',
  },
  {
    id: 2,
    name: 'Zubaidah',
    gender: 'Perempuan',
    telephone: '0857332819211',
  },
  {
    id: 4,
    name: 'Walid bin Khalid',
    gender: 'Laki-laki',
    telephone: '0857332819211',
  },
  {
    id: 5,
    name: 'Juliawti',
    gender: 'Perempuan',
    telephone: '0857332819211',
  },
];

export default function StudentScreen() {
  const [data, setData] = useState(DATA_STUDENT);

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (search) {
      const filteredData = DATA_STUDENT.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
      setData(filteredData);
    } else setData(DATA_STUDENT);
  }, [search]);

  return (
    <ParallaxScrollView headerImage={<BackButton title="Daftar Siswa" />}>
      <ThemedView style={styles.container}>
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          Daftar Siswa Kelas 1-A
        </Typography>

        <View style={styles.search}>
          <TextInput
            placeholder="Cari"
            borderRadius={8}
            value={search}
            onChangeText={(value) => setSearch(value)}
            iconBefore={<AntDesign name="search1" size={24} color="black" />}
          />
        </View>

        <ThemedView
          style={{
            rowGap: 12,
            marginTop: 16,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.card}>
                <Avatar name="" source="image" size={32} />
                <View style={{ marginLeft: 16 }}>
                  <Typography fontFamily="Poppins-Bold">{item.name}</Typography>
                  <Typography color="text-secondary">{item.gender}</Typography>
                  <Typography color="primary-500" style={styles.telephone}>
                    {item.telephone}
                  </Typography>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 32,
  },
  search: { marginTop: 16 },
  card: {
    padding: 12,
    borderWidth: 0.5,
    borderColor: '#C7C7CD',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
    borderRadius: 6,
    alignItems: 'flex-start',
  },
  telephone: {
    textDecorationLine: 'underline',
    textDecorationColor: '#297BBF',
  },
});
