import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, List } from 'react-native-paper';

import FeedCard from './FeedCard';

export default function FeedScreen() {
  return (
    <ScrollView style={styles.container}>
      <FeedCard />
    </ScrollView>
  );
}

FeedScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <TouchableOpacity onPress={() => null}>
          <Ionicons
            name={'ios-settings'}
            size={26}
            style={styles.TabIconLeft}
          />
      </TouchableOpacity>
    ),
    headerTitle: (
      <Text style={styles.headerText}>
        Fantasix
      </Text>
    ),
    headerStyle: {
      borderBottomWidth: 0,
      height: 70,
      paddingVertical: 15,
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity onPress={() => null}>
          <Ionicons
            name={'ios-log-out'}
            size={26}
            style={styles.TabIconRight}
          />
      </TouchableOpacity>
    ),
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAFE',
    padding: 20,
  },
  TabIconLeft: {
    marginLeft: 20,
    marginTop: 15,
  },
  TabIconRight: {
    marginRight: 20,
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold'
  },


});
