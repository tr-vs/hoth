import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function Header({ navigation, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.GameNameText}>{title}</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('ProfileScreen')}>
        <Image style={styles.profileIcon} source={require('../assets/profileicon.png')} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  GameNameText: {
    paddingTop: 10,
    color: '#D0D0D0',
    fontSize: 25,
    fontWeight: '600',
  },
  profileIcon: {},
});
