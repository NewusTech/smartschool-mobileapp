import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconCalendar, IconGraduationCap, IconHome } from '@/components/icons';
import IconUser from '@/components/icons/IconUser';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#297BBF',
        tabBarInactiveTintColor: '#AAAAAA',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          height: 80,
          backgroundColor: '#FFFFFF',
          paddingBottom: 12, // Ensures spacing for labels
          paddingTop: 16,
          justifyContent: 'center',
          borderColor: 'transparent',
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
          }),
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'OpenSans-Bold',
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: ({ focused }) => {
          let iconName: React.ReactNode;

          if (route.name === 'index') {
            iconName = (
              <IconHome color={focused ? 'primary-500' : 'text-secondary'} />
            );
          } else if (route.name === 'absensi') {
            iconName = (
              <IconCalendar color={focused ? 'primary-500' : 'line'} />
            );
          } else if (route.name === 'materi') {
            iconName = (
              <IconGraduationCap color={focused ? 'primary-500' : 'line'} />
            );
          } else if (route.name === 'profile') {
            iconName = <IconUser color={focused ? 'primary-500' : 'line'} />;
          }

          return (
            <View
              style={{
                backgroundColor: focused ? '#E3F2FD' : 'transparent',
                borderRadius: 16,
                paddingVertical: 4,
                paddingHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'center',
                height: 32,
                width: 56,
                marginBottom: 8,
              }}
            >
              {iconName}
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Beranda' }} />
      <Tabs.Screen name="absensi" options={{ title: 'Absensi' }} />
      <Tabs.Screen name="materi" options={{ title: 'Materi' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}
