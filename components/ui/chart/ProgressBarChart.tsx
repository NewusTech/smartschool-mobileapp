import View from '@/components/view';
import { memo } from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Typography } from '../typography';

interface IProgressBarChartProps {
  value: number;
  screenWidth: number;
  strokeWidth: number;
}

const ProgressBarChart = ({
  screenWidth,
  strokeWidth,
  value,
}: IProgressBarChartProps) => {
  const RADIUS = (screenWidth - strokeWidth) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const progress = value / 100;
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  return (
    <View style={styles.container}>
      <Svg width={screenWidth} height={screenWidth} fill="none">
        <Circle
          stroke="#F1F1F1"
          cx={screenWidth / 2}
          cy={screenWidth / 2}
          r={RADIUS}
          strokeWidth={strokeWidth}
        />

        <Circle
          stroke="#297BBF"
          cx={screenWidth / 2}
          cy={screenWidth / 2}
          r={RADIUS}
          strokeWidth={strokeWidth}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-270"
          origin={`${screenWidth / 2}, ${screenWidth / 2}`}
        />
      </Svg>
      <View style={styles.containerLabel}>
        <Typography
          fontSize={35}
          color="text-secondary"
          fontFamily="Poppins-Regular"
        >
          {value}%
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  containerLabel: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(ProgressBarChart);
