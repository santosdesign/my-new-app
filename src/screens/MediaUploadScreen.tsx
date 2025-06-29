import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type MediaUploadScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MediaUpload'>;

type Props = {
  navigation: MediaUploadScreenNavigationProp;
};

const MediaUploadScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Media</Text>
      <Button title="Upload" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MediaUploadScreen;
