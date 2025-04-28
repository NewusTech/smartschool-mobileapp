import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface IAvatarProps {
  borderRadius?: number;
  name: string;
  size?: number;
  source?: string;
}

const Avatar = ({
  source = '../../../assets/images/student.png',
  name,
  size = 50,
  borderRadius = 25,
}: IAvatarProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <View
      style={[styles.container, { width: size, height: size, borderRadius }]}
    >
      {source ? (
        <Image
          source={require('../../../assets/images/student.png')}
          style={[styles.image, { width: size, height: size, borderRadius }]}
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            { width: size, height: size, borderRadius },
          ]}
        >
          <Text style={styles.text}>{getInitials(name)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  placeholder: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default memo(Avatar);
