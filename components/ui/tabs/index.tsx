import { ThemedView } from '@/components/ThemedView';
import React, { memo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

interface ITabsProps {
  tabs: string[];
  onTabChange?: (index: number) => void;
}

const Tabs = ({ tabs, onTabChange }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    onTabChange?.(index);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
    >
      {tabs.map((tab, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => handleTabPress(index)}
        >
          <ThemedView
            style={[
              styles.tab,
              {
                borderBottomColor: activeTab === index ? '#297BBF' : '#CFD4DA',
              },
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === index && { color: '#534848' },
              ]}
            >
              {tab}
            </Text>
          </ThemedView>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    minWidth: '100%',
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 2,
    flex: 1,
  },
  activeTab: {
    borderBottomColor: '#297BBF',
  },
  tabText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
  },
  activeTabText: {
    color: '#534848',
    fontWeight: 'bold',
  },
});

export default memo(Tabs);
