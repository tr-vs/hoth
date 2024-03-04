import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import PostContent from '../components/PostContent'; // Import the new component

export default function FeedScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.GameNameTextContainer}>
        <Text style={styles.GameNameText}>Game Name</Text>
        <Image style={styles.profileIcon} source={require('../assets/profileicon.png')} />
      </View>
      <PostContent
        postText="trvs sniped Lance994!"
        imageSource={require('../assets/IMG_7953.jpeg')}
      />
      <PostContent
        postText="trvs sniped Lance994!"
        imageSource={require('../assets/IMG_7953.jpeg')}
      />
      <PostContent
        postText="trvs sniped Lance994!"
        imageSource={require('../assets/IMG_7953.jpeg')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252424',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
  },
  GameNameTextContainer: {
    paddingTop: 30,
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
