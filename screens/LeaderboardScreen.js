import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

export default function LeaderboardScreen() {





  return (
    <SafeAreaView style = {{flex: 1, margin: 10}}>
      <View contentContainerStyle ={ styles.scrollView }>
        <Image style = { styles.podium }
          source={require('../assets/icons8-leaderboard-50.png')}
        />
        <Text>Leaderboard Screen</Text>
        <Text>Leaderboard Screen</Text>
        <Text>Leaderboard Screen</Text>
        <Text>Leaderboard Screen</Text>
      </View>
      <View style = {styles.container}>
        <ScrollView style = {styles.scrollView}>
          <View style = {styles.box}>
            <Text>most sniped</Text>
          </View>
          <View style = {styles.box}>
            <Text>best sniper</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  podium: {
    width: 200, 
    height: 200, 
  },
  container: {
    length: 100,
    width: '100%',
    alignItems: "center"
  },
  box: { 
    flex: 1,
    backgroundColor: 'black'
  },
  scrollView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'gray'
  }
});

