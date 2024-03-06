import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import PostContent from '../components/PostContent';

export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Game Name" />
      <ScrollView>
        <PostContent
          postText="trvs sniped Lance994!"
          imageSource={require('../assets/download.jpg')}
        />
        <PostContent
          postText="trvs sniped Lance994!"
          imageSource={require('../assets/download.jpg')}
        />
        <PostContent
          postText="trvs sniped Lance994!"
          imageSource={require('../assets/download.jpg')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252424',
    flexDirection: 'column',
    paddingTop: 40,
  },
});

