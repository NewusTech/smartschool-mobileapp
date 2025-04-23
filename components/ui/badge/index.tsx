import View from '@/components/view';
import { AppColorUnion } from '@/constants/Colors';
import { useAppTheme } from '@/context/theme-context';
import { memo, useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { Typography } from '../typography';

interface IBadgeProps {
  borderRadius?: number;
  borderWidth?: number;
  color?: AppColorUnion;
  fontSize: number;
  title: string;
  type: string;
  position?: string;
}

const Badge = ({
  borderRadius = 50,
  borderWidth = 1,
  color = 'primary-500',
  fontSize,
  title,
  type,
  position = '',
}: IBadgeProps) => {
  const { Colors } = useAppTheme();

  const backgroundColor = useMemo(() => {
    switch (color) {
      case 'success-700':
        return '#D9FFDB33';
      case 'error-500':
        return '#FFC3C333';
      default:
        return '#F1F1F1';
    }
  }, [color]);

  const typeStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      borderRadius,
      paddingHorizontal: 8,
      alignSelf: position ? 'baseline' : 'auto',
    };

    if (type === 'outlined') {
      return {
        ...baseStyle,
        borderWidth,
        borderColor: Colors[color],
        backgroundColor,
      };
    }

    return {
      ...baseStyle,
      backgroundColor: Colors[color as AppColorUnion],
    };
  }, [
    Colors,
    backgroundColor,
    borderRadius,
    borderWidth,
    color,
    position,
    type,
  ]);

  return (
    <View style={typeStyle}>
      <Typography
        fontSize={fontSize}
        color={type === 'outlined' ? color : 'white'}
        style={{ marginTop: 3 }}
      >
        {title}
      </Typography>
    </View>
  );
};

export default memo(Badge);
