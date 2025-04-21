import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type AvatarProps = {
  borderRadius?: number;
  name: string;
  size?: number;
  source?: string;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const Avatar = ({
  source,
  name,
  size = 50,
  borderRadius = 25,
}: AvatarProps) => {
  return (
    <View
      style={[styles.container, { width: size, height: size, borderRadius }]}
    >
      {source ? (
        <Image
          source={require("../../../assets/images/student.png")}
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
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
  },
  placeholder: {
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Avatar;
