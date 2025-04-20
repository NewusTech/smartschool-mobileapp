import React, { memo } from 'react';
import { View } from 'react-native';
import { Rect, Svg, Text as SVGText } from 'react-native-svg';

const chartHeight = 200;
const groupMargin = 12; // Margin between each group of bars
const barRadius = 3; // Radius for the bars
const labelColor = '#000';

interface IGroupedBarChartProps {
  labels: string[];
  data1: number[];
  data2: number[];
  barColor1: string;
  barColor2: string;
  screenWidth: number;
}

const GroupedBarChart = ({
  labels,
  data1,
  data2,
  barColor1,
  barColor2,
  screenWidth,
}: IGroupedBarChartProps) => {
  const numberOfBars = labels.length;
  const availableWidth = screenWidth - (numberOfBars - 1) * groupMargin; // Adjust available width for margins
  const widthPerGroup = availableWidth / numberOfBars;
  const barSpacingRatio = 0.08; // Spacing between bars within a group (as a ratio of group width)
  const barWidth = (widthPerGroup * (1 - barSpacingRatio)) / 2;
  const barSpacing = widthPerGroup * barSpacingRatio;
  const maxDataValue = Math.max(...data1, ...data2);
  const scale = chartHeight / maxDataValue;
  const horizontalOffset =
    (screenWidth - availableWidth - (numberOfBars - 1) * groupMargin) / 2; // Center the chart

  return (
    <View
      style={{
        marginHorizontal: 'auto',
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg width={screenWidth} height={chartHeight + 30}>
        {labels.map((label, index) => {
          const groupX =
            horizontalOffset + index * (widthPerGroup + groupMargin);
          const x1 = groupX;
          const x2 = groupX + barWidth + barSpacing;

          const y1 = chartHeight - data1[index] * scale;
          const y2 = chartHeight - data2[index] * scale;
          const height1 = data1[index] * scale;
          const height2 = data2[index] * scale;
          const textX = groupX + widthPerGroup / 2;

          return (
            <View key={index}>
              <Rect
                x={x1}
                y={y1}
                width={barWidth}
                height={height1}
                fill={barColor1}
                rx={barRadius}
                ry={barRadius}
              />
              <Rect
                x={x2}
                y={y2}
                width={barWidth}
                height={height2}
                fill={barColor2}
                rx={barRadius}
                ry={barRadius}
              />
              <SVGText
                x={textX}
                y={chartHeight + 15}
                fontSize={12}
                fill={labelColor}
                textAnchor="middle"
              >
                {label}
              </SVGText>
            </View>
          );
        })}
      </Svg>
    </View>
  );
};

export default memo(GroupedBarChart);
