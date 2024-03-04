import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button
        title= "Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
}
