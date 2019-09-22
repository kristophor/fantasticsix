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

import CurrentProjectsCard from './CurrentProjectsCard';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image size={75} source={require('../assets/images/robot-dev.png')} />
        <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 10}}>Chris Chen . Toronto, ON</Text>
        <Text style={{fontSize: 14, marginVertical: 10}}>My name is Chris I am a developer from a place called Toronto. I can do something soon.</Text>
      </View>

      <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 25}}>Current Projects</Text>
      <View style={styles.projectContainer}>
        <CurrentProjectsCard />
      </View>

      <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 25}}>Network</Text>
      <ScrollView horizontal={true} style={{paddingBottom: 30}}>
        <View style={styles.contactsCardContainer}>
          <Avatar.Image size={75} source={require('../assets/images/robot-dev.png')} />
        </View>
        <View style={styles.contactsCardContainer}>
          <Avatar.Image size={75} source={require('../assets/images/robot-dev.png')} />
        </View>
        <View style={styles.contactsCardContainer}>
          <Avatar.Image size={75} source={require('../assets/images/robot-dev.png')} />
        </View>

      </ScrollView>

    </ScrollView>
  );
}

DashboardScreen.navigationOptions = ({ navigation }) => {
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
  avatarContainer: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    marginBottom: 20,
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
  contactsCardContainer: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    marginRight: 15,
    width: (Dimensions.get('window').width - 80) * 0.50,
  },

});
