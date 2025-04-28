import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/button';

import SelectInput, { DataItem } from '@/components/ui/selectInput';
import TextInput from '@/components/ui/textInput';
import { Typography } from '@/components/ui/typography';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

const FormEvaluationScreen = () => {
  const DATA_EVALUATION = [
    {
      id: 1,
      question: 'Apakah guru menyampaikan materi dengan jelas?',
    },
    {
      id: 2,
      question: 'Apakah guru menyampaikan materi dengan jelas?',
    },
    {
      id: 3,
      question: 'Apakah guru menyampaikan materi dengan jelas?',
    },
    {
      id: 4,
      question: 'Apakah guru menyampaikan materi dengan jelas?',
    },
  ];

  const [selected, setSelected] = useState<DataItem | null>(null);

  const data: DataItem[] = [
    { name: 'Sangat Jelas', value: 'sangat_jelas' },
    { name: 'Jelas', value: 'jelas' },
    { name: 'Cukup Jelas', value: 'cukup_jelas' },
    { name: 'Kurang Jelas', value: 'kurang_jelas' },
  ];

  return (
    <ParallaxScrollView title="Form Evaluasi">
      <ThemedView style={styles.container}>
        <Typography fontSize={16} fontFamily="Poppins-Bold">
          Form Evaluasi Pembelajaran
        </Typography>

        <ThemedView
          style={{
            gap: 16,
            marginTop: 16,
          }}
        >
          <TextInput
            label="Mata Pelajaran"
            editable={false}
            borderRadius={8}
            value="IPA"
          />

          <TextInput
            label="Nama Guru"
            editable={false}
            borderRadius={8}
            value="Hendro Wijaya, S.Pd."
          />

          <TextInput
            label="Kelas"
            editable={false}
            borderRadius={8}
            value="1-A"
          />
        </ThemedView>

        <ThemedView style={{ marginTop: 24 }}>
          <Typography fontSize={16} fontFamily="Poppins-Bold">
            Evaluasi Guru
          </Typography>
        </ThemedView>

        <FlatList
          style={{ marginTop: 16 }}
          contentContainerStyle={{ gap: 16 }}
          scrollEnabled={false}
          data={DATA_EVALUATION}
          renderItem={({ item }) => (
            <SelectInput
              data={data}
              label={item.question}
              onSelect={(item) => setSelected(item)}
              value={selected?.value || ''}
            />
          )}
        />

        <Button style={styles.buttonSave}>Kirim</Button>
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 24,
  },
  buttonSave: {
    marginTop: 24,
    elevation: 6,
    paddingVertical: 6,
  },
  dropdownContainer: {
    marginBottom: 24,
  },
});

export default FormEvaluationScreen;
