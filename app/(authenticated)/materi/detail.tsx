import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import AttachmentInput from '@/components/ui/attachment/attachmentInput';
import Avatar from '@/components/ui/avatar';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Tabs from '@/components/ui/tabs';
import TextInput from '@/components/ui/textInput';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

const ELearningDetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{
    type: string;
    status: string;
  }>();

  const { type, status } = params;

  const [tabActive, setTabActive] = useState<number>(0);

  const handleNavigateToDetail = () =>
    router.push('/(authenticated)/materi/form');

  const renderMaterial = useMemo(
    () => (
      <View style={{ gap: 16 }}>
        <Typography
          fontSize={16}
          fontFamily="Poppins-Bold"
          style={{ marginTop: 32 }}
        >
          Materi E-Learning
        </Typography>

        <Badge
          title={status === 'Selesai' ? 'Sudah diunduh' : 'Belum Diunduh'}
          type="outlined"
          color={status === 'Selesai' ? 'success-700' : 'error-500'}
          position="left"
          fontSize={12}
        />

        <View style={{ gap: 16 }}>
          {['Materi.pdf', 'Materi.pdf'].map((item, index) => (
            <AttachmentInput
              key={index}
              label=""
              enabled={false}
              fileName={item}
            />
          ))}
        </View>
      </View>
    ),
    [status],
  );

  const renderDetail = useMemo(
    () => (
      <View style={{ gap: 16 }}>
        <Typography
          fontSize={16}
          fontFamily="Poppins-Bold"
          style={{ marginTop: 32 }}
        >
          {type === '0' ? 'Tugas' : 'Ujian'}
        </Typography>

        <Badge
          title={status}
          type="outlined"
          color={status === 'Selesai' ? 'success-700' : 'error-500'}
          position="left"
          fontSize={12}
        />

        <View>
          <Typography>Waktu Pengerjaan (Menit)</Typography>
          <Typography fontFamily="Poppins-Bold">60</Typography>
        </View>
        <View>
          <Typography>Batas Tanggal Pengerjaan</Typography>
          <Typography fontFamily="Poppins-Bold">
            Senin, 12 Maret 2025 23:59
          </Typography>
        </View>
      </View>
    ),
    [status, type],
  );

  const renderForumDiscussion = useMemo(
    () => (
      <View>
        <View
          style={{ padding: 16, paddingBottom: 40, gap: 16, marginTop: 12 }}
        >
          <Typography fontFamily="Poppins-Bold" fontSize={16}>
            Forum Diskusi Kelas
          </Typography>

          <TextInput
            placeholder="Tulis sesuatu diforum diskusi..."
            multiline
            numberOfLines={5}
            borderRadius={6}
            style={{ minHeight: 78 }}
            textAlignVertical="top"
          />
          <Button style={{ elevation: 6 }}>Kirim</Button>
        </View>

        <FlatList
          data={[1, 2]}
          contentContainerStyle={{ gap: 12 }}
          renderItem={({ item }) => (
            <View
              key={item}
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 6,
                padding: 16,
                gap: 16,
              }}
            >
              {[1, 2].map((o) => (
                <View
                  key={o}
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingBottom: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                    }}
                  >
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
                        10/02/2025 08:03
                      </Typography>
                    </View>
                  </View>

                  <Typography>
                    Pak ahmad, saya sudah mengumpulkan tugasnya
                  </Typography>
                </View>
              ))}

              <TextInput placeholder="Berikan komentar" borderRadius={8} />
              <View style={{ alignSelf: 'flex-end' }}>
                <Button style={{ elevation: 6, paddingHorizontal: 16 }}>
                  Kirim
                </Button>
              </View>
            </View>
          )}
          scrollEnabled={false}
        />
      </View>
    ),
    [],
  );

  return (
    <ParallaxScrollView title="E-Learning & Tugas">
      <ThemedView style={styles.container}>
        <View style={{ marginTop: 12, gap: 16 }}>
          <View>
            <View style={styles.card}>
              <Typography
                fontSize={16}
                color="primary-500"
                fontFamily="Poppins-Bold"
              >
                Matematika
              </Typography>
              <Typography>Pengukuran Waktu dan Panjang</Typography>
              <Typography fontSize={12} color="text-secondary">
                Selesaikan sebelum Senin, 12 Maret 2025 23:59
              </Typography>

              <Badge
                title={status}
                type="outlined"
                color={status === 'Selesai' ? 'success-700' : 'error-500'}
                position="left"
                fontSize={12}
              />
            </View>

            {type === '0' && (
              <Tabs
                tabs={['E-Learning da...', 'Forum Diskusi']}
                onTabChange={setTabActive}
              />
            )}

            {tabActive === 0 ? (
              <>
                {type === '0' && renderMaterial}
                {renderDetail}

                {status !== 'Selesai' && (
                  <Button
                    onPress={handleNavigateToDetail}
                    style={{ elevation: 6, marginTop: 16 }}
                  >
                    Kerjakan Sekarang
                  </Button>
                )}
              </>
            ) : (
              renderForumDiscussion
            )}
          </View>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ELearningDetailScreen;

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
    marginBottom: 16,
  },
});
