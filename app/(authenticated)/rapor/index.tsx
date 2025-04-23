import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import Avatar from '@/components/ui/avatar';
import BackButton from '@/components/ui/backButton';
import { Button } from '@/components/ui/button';
import Tabs from '@/components/ui/tabs';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

export default function StudentScreen() {
  const [tabActive, setTabActive] = useState<number>(0);

  return (
    <ParallaxScrollView headerImage={<BackButton title="E-Rapor Tugas" />}>
      <ThemedView style={styles.container}>
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          E-Rapor
        </Typography>

        <View style={styles.header}>
          <Avatar name="" source="image" size={32} />
          <View style={{ marginLeft: 16, marginTop: 6 }}>
            <Typography
              fontFamily="Poppins-Bold"
              style={{
                marginTop: -6,
              }}
            >
              Annisa Rachma
            </Typography>
            <Typography fontSize={12} color="text-secondary">
              Kelas 1-A
            </Typography>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Tabs
            tabs={['UTS', 'UAS']}
            onTabChange={(tab) => setTabActive(tab)}
          />
        </View>

        <FlatList
          data={tabActive === 0 ? [1, 2] : [1, 2, 3]}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.item} key={item}>
              <View style={styles.label}>
                <Typography fontFamily="Poppins-Bold">Kelas 1-A</Typography>

                <Typography fontSize={12} color="text-secondary">
                  Semester Ganjil
                </Typography>
              </View>

              <Button
                variant="outlined"
                color="line"
                textColor="text-default"
                iconAfter={
                  <Feather name="download" size={18} color="#000000" />
                }
              >
                Unduh Rapor
              </Button>
            </View>
          )}
        />
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
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  item: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAF2F9',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  label: {
    borderLeftWidth: 2,
    borderLeftColor: '#297BBF',
    paddingLeft: 8,
  },
});
