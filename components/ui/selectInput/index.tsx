import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { AppColorUnion } from '@/constants/Colors';
import { useAppTheme } from '@/context/theme-context';

import View from '@/components/view';
import { FontAwesome5 } from '@expo/vector-icons';
import { memo, useMemo } from 'react';
import { Typography } from '../typography';

export type DataItem = {
  name: string;
  value: string | number;
};
export type ISelectInputProps = {
  borderRadius?: number;
  data: DataItem[];
  onSelect: (selectedItem: DataItem, index: number) => void;
  value: string | number;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  color?: AppColorUnion;
};

const SelectInput = ({
  value,
  borderRadius = 6,
  data = [],
  onSelect,
  placeholder = 'Pilih',
  label,
  disabled = false,
  color = 'neutral-700',
}: ISelectInputProps) => {
  const { Colors } = useAppTheme();

  const selectedValue = useMemo(
    () => data.find((item) => item.value === value),
    [data, value],
  );

  return (
    <SelectDropdown
      disabled={disabled}
      data={data}
      onSelect={onSelect}
      renderButton={(selected, isOpened) => (
        <View style={{ gap: 5 }}>
          {label && (
            <Typography fontFamily="Poppins-Medium">{label}</Typography>
          )}
          <View
            style={[
              styles.container,
              {
                borderColor: isOpened ? Colors['primary-500'] : Colors[color],
                borderRadius,
                backgroundColor: disabled
                  ? Colors['line-stroke-20']
                  : 'transparent',
              },
            ]}
          >
            <Typography style={styles.textInput}>
              {selectedValue?.name || placeholder}
            </Typography>

            <FontAwesome5 name={isOpened ? 'chevron-up' : 'chevron-down'} />
          </View>
        </View>
      )}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={[
              styles.dropdownItem,
              {
                ...(isSelected && { backgroundColor: Colors['neutral-100'] }),
              },
            ]}
          >
            <Typography>{item.name}</Typography>
          </View>
        );
      }}
      dropdownStyle={{
        backgroundColor: Colors.white,
        borderRadius: 8,
      }}
      dropdownOverlayColor="transparent"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
  },
  dropdownItem: {
    padding: 8,
    paddingHorizontal: 12,
  },
});

export default memo(SelectInput);
