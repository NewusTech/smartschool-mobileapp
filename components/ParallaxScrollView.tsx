import { useCallback, useMemo, type PropsWithChildren } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { IconCaretLeft } from './icons';
import SafeAreaView from './ui/safeAreaView';
import { Typography } from './ui/typography';

const HEADER_HEIGHT = 120;

type Props = PropsWithChildren<{
  onBackPress?: () => void;
  title?: string;
}>;

export default function ParallaxScrollView({
  children,
  title,
  onBackPress,
}: Props) {
  const router = useRouter();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  const handleBackPress = useCallback(() => {
    if (onBackPress) return onBackPress();
    return router.back();
  }, [onBackPress, router]);

  const handleNavigateNotification = useCallback(
    () => router.push('/(authenticated)/notification'),
    [router],
  );

  const header = useMemo(() => {
    if (title) {
      return (
        <TouchableWithoutFeedback onPress={handleBackPress}>
          <View style={styles.backButton}>
            <IconCaretLeft color="black-80" />

            {!!title && (
              <Typography fontSize={16} fontFamily="Poppins-Bold">
                {title}
              </Typography>
            )}
          </View>
        </TouchableWithoutFeedback>
      );
    }

    return (
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={[styles.imageHeader, headerAnimatedStyle]}
        />
        <Pressable onPress={handleNavigateNotification}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </Pressable>
      </View>
    );
  }, [handleBackPress, handleNavigateNotification, headerAnimatedStyle, title]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          scrollIndicatorInsets={{ bottom }}
          contentContainerStyle={{ paddingBottom: bottom }}
        >
          {header && (
            <Animated.View style={[styles.header, headerAnimatedStyle]}>
              {header}
            </Animated.View>
          )}

          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F9',
  },
  header: {
    overflow: 'hidden',
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#EAF2F9',
    marginTop: 20,
  },
  imageHeader: {
    width: 153,
    height: 48,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
  },
});
