import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

import { useAppTheme } from '@/context/theme-context';

import { AppColorUnion } from '@/constants/Colors';
import View from '../../view';
import { Typography } from '../typography';

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined';
  style?: ViewProps['style'];
  color?: AppColorUnion;
  textColor?: AppColorUnion;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  iconGap?: number;
} & PressableProps;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    disabled = false,
    style,
    color = 'primary-500',
    textColor,
    iconBefore,
    iconAfter,
    iconGap = 12,
    ...rest
  } = props;

  const { Colors } = useAppTheme();

  const backgroundColor =
    variant === 'primary'
      ? disabled
        ? Colors['line-stroke-30']
        : Colors[color]
      : variant === 'outlined'
        ? 'transparent'
        : Colors.white;

  const borderColor = disabled ? Colors['line-stroke-30'] : Colors[color];

  const computedTextColor =
    textColor ||
    (variant === 'primary' ? 'white' : disabled ? 'line-stroke-30' : color);

  const renderContent = () => {
    const labelContent =
      typeof children === 'string' ? (
        <Typography
          fontFamily="OpenSans-Semibold"
          color={computedTextColor}
          style={styles.text}
        >
          {children}
        </Typography>
      ) : (
        children
      );

    if (!iconBefore && !iconAfter) return labelContent;

    return (
      <View style={[styles.childrenWrapper, { gap: iconGap }]}>
        {iconBefore}
        {labelContent}
        {iconAfter}
      </View>
    );
  };

  return (
    <Pressable disabled={disabled} {...rest}>
      {(pressable) => (
        <View
          style={[
            styles.container,
            {
              borderColor,
              backgroundColor,
              borderWidth: variant === 'outlined' ? 2 : 1,
            },
            style,
          ]}
        >
          <View style={styles.contentWrapper}>{renderContent()}</View>

          {pressable.pressed && (
            <View
              style={[
                styles.mask,
                {
                  backgroundColor: `${Colors[color]}${
                    variant === 'primary'
                      ? '80'
                      : variant === 'outlined'
                        ? '14'
                        : '0D'
                  }`,
                },
              ]}
            />
          )}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    minHeight: 44,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  childrenWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  mask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
