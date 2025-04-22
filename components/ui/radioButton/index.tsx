import { AppColorUnion } from '@/constants/Colors';
import React, { memo, useCallback } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Typography } from '../typography';

interface IRadioButtonProps {
  onPress: (value: string) => void;
  option: string;
  selected?: string;
  textColor?: AppColorUnion;
  value: string;
}

const RadioButton = ({
  option,
  value,
  selected,
  onPress,
  textColor = 'text-default',
}: IRadioButtonProps) => {
  const handlePress = useCallback(() => onPress(value), [onPress, value]);

  return (
    <Pressable style={styles.optionContainer} onPress={handlePress}>
      <View
        style={[
          styles.radioOuter,
          {
            borderColor: selected === value ? '#297BBF' : '#C7C7CD',
            backgroundColor: selected === value ? '#297BBF' : '#FFFFFF',
          },
        ]}
      >
        {selected === value && <View style={styles.radioInner} />}
      </View>
      <Typography color={textColor}>{option}</Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#297BBF',
    borderRadius: 8,
    padding: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    height: 26,
    width: 26,
    borderRadius: 16,
    borderWidth: 2,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#FFFF',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default memo(RadioButton);
