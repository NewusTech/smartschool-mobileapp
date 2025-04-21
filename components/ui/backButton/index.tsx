import { IconCaretLeft } from '@/components/icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { memo } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

type BackButtonProps = {
  title?: string;
  onBackButton?: () => void;
};

const BackButton = ({ onBackButton, title = '' }: BackButtonProps) => {
  const router = useRouter();

  const handleBackPress = () => {
    if (onBackButton) return onBackButton();
    return router.back();
  };

  return (
    <ThemedView style={styles.headerContainer}>
      <TouchableWithoutFeedback onPress={handleBackPress}>
        <View style={styles.content}>
          <IconCaretLeft color="black-80" />

          {!!title && <ThemedText style={styles.text}>{title}</ThemedText>}
        </View>
      </TouchableWithoutFeedback>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 8,
  },
  content: { flexDirection: 'row', alignItems: 'center', columnGap: 6 },
  text: { fontSize: 16, fontWeight: 'bold' },
});

export default memo(BackButton);
