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
  color,
  fontSize,
  title,
  type,
  position = '',
}: IBadgeProps) => {
  const { Colors } = useAppTheme();

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
        borderColor: Colors[color as AppColorUnion],
      };
    }

    return {
      ...baseStyle,
      backgroundColor: Colors[color as AppColorUnion],
    };
  }, [Colors, borderRadius, borderWidth, color, position, type]);

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
