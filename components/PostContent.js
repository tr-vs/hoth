import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostContent = ({ postText, imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.postText}>{postText}</Text>
      <Image style={styles.snipedPhoto} source={imageSource} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8A8A8A',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
    width: 330,
    height: 200,
    borderRadius: 10,
  },
  postText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  snipedPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default PostContent;
