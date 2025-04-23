import { ReactNode, useState } from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useAppTheme } from '@/context/theme-context';

import View from '@/components/view';
import { AppColorUnion } from '@/constants/Colors';
import { IconEye, IconEyeSlice } from '../../icons';
import { Typography } from '../typography';

import React from 'react';

export type TextInputProps = {
  label?: string;
  trailingIcon?: ReactNode;
  errorMessage?: string;
  borderRadius?: number;
  textAlignVertical?: 'top' | 'center';
  iconBefore?: ReactNode;
  color?: AppColorUnion;
} & RNTextInputProps;
export default function TextInput(props: TextInputProps) {
  const {
    label = '',
    editable = true,
    style,
    errorMessage = '',
    secureTextEntry = false,
    trailingIcon,
    borderRadius = 100,
    textAlignVertical = 'center',
    color = 'line-stroke-50',
    iconBefore = undefined,
    ...rest
  } = props;

  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const [focused, setFocused] = useState<boolean>(false);

  const { Colors } = useAppTheme();

  return (
    <View style={styles.container}>
      {label && <Typography fontFamily="Poppins-Medium">{label}</Typography>}
      <View
        backgroundColor={editable ? 'transparent' : 'line-stroke-20'}
        style={[
          styles.inputWrapper,
          {
            borderColor:
              errorMessage.trim() !== ''
                ? Colors['error-60']
                : focused
                  ? Colors[color]
                  : Colors['line-stroke-30'],
            borderRadius,
          },
        ]}
      >
        {iconBefore && <View style={{ marginRight: -8 }}>{iconBefore}</View>}

        <View style={{ flex: 1 }}>
          <RNTextInput
            placeholderTextColor={Colors['line-stroke-30']}
            editable={editable}
            style={[{ color: Colors['black-80'], textAlignVertical }, style]}
            secureTextEntry={secureTextEntry && hidePassword}
            {...rest}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </View>

        {trailingIcon ||
          (secureTextEntry && (
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <View>
                {hidePassword ? (
                  <IconEye color="text-default" />
                ) : (
                  <IconEyeSlice color="text-default" />
                )}
              </View>
            </TouchableOpacity>
          ))}
      </View>

      {!!errorMessage && (
        <Typography fontFamily="Poppins-Light" fontSize={10} color="error-50">
          {errorMessage}
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  inputWrapper: {
    borderWidth: 1,
    paddingHorizontal: 12,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
