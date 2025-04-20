import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { memo } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

const Header = () => {
  const router = useRouter();

  return (
    <ThemedView style={styles.titleContainer}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={{
          width: 153,
          height: 48,
          alignSelf: 'center',
        }}
      />
      <Pressable
        onPress={() => router.push('/(authenticated)/notification')}
        style={{
          alignItems: 'center',
        }}
      >
        <Ionicons name="notifications-outline" size={24} color="black" />
      </Pressable>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    gap: 8,
  },
});

export default memo(Header);
