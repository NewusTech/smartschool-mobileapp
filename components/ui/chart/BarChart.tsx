import React, { memo } from 'react';
import { Dimensions, View } from 'react-native';
import Svg, { Rect, Text as SVGText } from 'react-native-svg';

interface DataChart {
  label: string;
  value: number;
  color: string;
}

interface IBarChartProps {
  data: DataChart[];
}

const BarChart = ({ data }: IBarChartProps) => {
  const labelColor = '#70707B';

  const screenWidth = Dimensions.get('window').width - 100;
  const barWidth = (screenWidth - 25) / 2;
  const spacing = 20;
  const maxValue = Math.max(...data.map((item) => item.value));
  const chartHeight = 150;

  return (
    <View
      style={{
        marginHorizontal: 'auto',
      }}
    >
      <Svg width={screenWidth} height={chartHeight + 30}>
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * chartHeight;
          const x = index * (barWidth + spacing);
          const y = chartHeight - barHeight;

          return (
            <React.Fragment key={index}>
              <Rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color}
                rx={3}
                ry={3}
              />
              <SVGText
                x={x + barWidth / 2}
                y={chartHeight + 15}
                textAnchor="middle"
                fill={labelColor}
              >
                {item.label}
              </SVGText>
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
};

export default memo(BarChart);
