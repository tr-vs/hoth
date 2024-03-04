import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ProfileScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title= "Profile"
        onPress={() => navigation.navigate('MainTabs')}
      />
    </View>
  );
}
