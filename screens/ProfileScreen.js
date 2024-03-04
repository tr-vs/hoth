import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileIcon}
          source={require('../assets/profileicon.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.username}>buttsniffer42</Text>
          <View style={styles.profileStats}>
            <Image
              style={styles.snipedIcon}
              source={require('../assets/sniped.png')}
            />
            <Text style={styles.snipedCounter}>20</Text>
            <Image
              style={styles.diedIcon}
              source={require('../assets/died.png')}
            />
            <Text style={styles.diedCounter}>40</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.PastGamesContainer}>
        <Text style={styles.PastGamesText}>Past Games</Text>
      </View>

      <View style={styles.GameHistoryContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252424',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,
  },
  profileContainer: {
    paddingLeft: 30,
    paddingTop: 50,
    flexDirection: 'row',
  },
  profileIcon: {
    width: 80, 
    height: 80, 
  },
  profileInfo: {
    flexDirection: 'column',
    paddingTop: 8,
    paddingLeft: 15, 
  },
  username: {
    color: '#D0D0D0',
    fontSize: 25,
    fontWeight: 'bold',
  },
  profileStats: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  snipedIcon: {

  },
  diedIcon: {
    width: 30, 
    height: 30, 
  },
  snipedCounter: {
    paddingLeft: 8,
    paddingRight: 15,
    paddingTop: 8,
    color: '#D0D0D0',
    fontSize: 15,
    fontWeight: 'bold',
  },
  diedCounter: {
    paddingLeft: 8,
    paddingTop: 8,
    color: '#D0D0D0',
    fontSize: 15,
    fontWeight: 'bold',
  },
  PastGamesContainer: {
    paddingTop: 30,
    paddingLeft: 30,
  },
  PastGamesText: {
    fontSize: 20,
    color: '#D0D0D0',
    fontWeight: '500',
  },
  GameHistoryContainer: {
    backgroundColor: '#8A8A8A',
    alignSelf: 'center', 
    marginTop: 20, 
    width: 330, 
    height: 200, 
    borderRadius: 10,
  }
});
