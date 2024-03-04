import React from 'react';
import { ScrollView, Image, View, SafeAreaView, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function LeaderboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Game Name" />
        <View style={styles.podiums}>
          <View style={styles.podium1}>
            <View style={styles.empty1}></View>
            <Image style={styles.profileIcon} source={require('../assets/profileicon.png')} />
            <View style={styles.podiumBlock1} />
          </View>
          <View style={styles.podium2}>
            <Image style={styles.profileIcon} source={require('../assets/profileicon.png')} />
            <View style={styles.podiumBlock2} />
          </View>
          <View style={styles.podium3}>
            <View style={styles.empty3}></View>
            <Image style={styles.profileIcon} source={require('../assets/profileicon.png')} />
            <View style={styles.podiumBlock3} />
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.statsHeading}>Best Sniper</Text>
          <View style={styles.mostSnipedContainer}>
            <Image style={styles.iconInStats} source={require('../assets/profileicon.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.statsText}>tacobellluvr</Text>
              <Text style={styles.textCounter}>Sniped 28 targets</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.statsHeading}>Most Sniped</Text>
          <View style={styles.mostSnipedContainer}>
            <Image style={styles.iconInStats} source={require('../assets/profileicon.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.statsText}>teresa</Text>
              <Text style={styles.textCounter}>Got sniped 42 times</Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252424',
    flex: 1,
    paddingTop: 40,
    flexDirection: 'column',
  },
  podiums: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 85,
    paddingRight: 85,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  podium1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  podium2: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  podium3: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  podiumBlock1: {
    backgroundColor: '#8A8A8A',
    width: 70,
    height: 30,
  },
  podiumBlock2: {
    backgroundColor: '#8A8A8A',
    width: 70,
    height: 100,
  },
  podiumBlock3: {
    backgroundColor: '#8A8A8A',
    width: 70,
    height: 70,
  },
  empty1: {
    width: 70,
    height: 70,
  },
  empty3: {
    width: 70,
    height: 30,
  },
  profileIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    alignItems: 'center',
  },

  statsContainer: {
    backgroundColor: '#8A8A8A',
    alignSelf: 'center',
    marginTop: 40,
    width: 330,
    height: 150,
    borderRadius: 10,
  },
  statsHeading: {
    paddingTop: 15,
    paddingLeft: 15,
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  mostSnipedContainer: {
    flexDirection: 'row',
  },
  iconInStats: {
    marginTop: 19,
    marginLeft: 30,
    width: 70,
    height: 70,
  },
  textContainer: {
    flexDirection: 'column',
    paddingTop: 30,
  },
  statsText: {
    paddingLeft: 15,
    color: 'black',
    fontSize: 19,
    fontWeight: '500',
  },
  textCounter: {
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 15,
  }
});
