import View from '@/components/view';
import { AppColorUnion } from '@/constants/Colors';
import { memo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { appFonts, Typography } from '../typography';

export enum FieldValueTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export type FieldValueType = keyof Record<FieldValueTypes, string>;

type FieldValueStyle = StyleProp<ViewStyle>;

interface IFieldValueProps {
  label: string;
  labelColor?: AppColorUnion;
  labelSize?: number;
  labelWeight?: keyof typeof appFonts;
  style?: FieldValueStyle;
  type?: FieldValueType;
  value: string;
  valueColor?: AppColorUnion;
  valueSize?: number;
  valueWeight?: keyof typeof appFonts;
}

const FieldValue = ({
  label,
  labelColor = 'text-default',
  labelSize = 14,
  labelWeight = 'Poppins-Regular',
  style,
  type = FieldValueTypes.VERTICAL,
  value,
  valueColor = 'text-default',
  valueSize = 14,
  valueWeight = 'Poppins-Bold',
}: IFieldValueProps) => {
  return type === FieldValueTypes.HORIZONTAL ? (
    <View style={[styles.wrapperHorizontal, style]}>
      <Typography
        color={labelColor}
        fontSize={labelSize}
        fontFamily={labelWeight}
      >
        {label}
      </Typography>
      <Typography
        color={valueColor}
        fontSize={valueSize}
        fontFamily={valueWeight}
      >
        {value}
      </Typography>
    </View>
  ) : (
    <View style={style}>
      <Typography
        color={labelColor}
        fontSize={labelSize}
        fontFamily={labelWeight}
      >
        {label}
      </Typography>
      <Typography
        color={valueColor}
        fontSize={valueSize}
        fontFamily={valueWeight}
      >
        {value}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default memo(FieldValue);
