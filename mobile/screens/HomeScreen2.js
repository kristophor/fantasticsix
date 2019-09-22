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
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Transactions from '../datasets/transactions';
export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.tinyWelcomeStrip}>
        <View style={styles.sixWelcomeCard}>
          <Text style={{fontWeight: 'bold', fontSize: 16, }}>Welcome Chris</Text>
        </View>
      </View>
      <View style={styles.userCurrentRating}>
        <View style={styles.sixRatingCard}>
          <View style={styles.ratingLeft}>
            <Text style={{fontWeight: 'bold', fontSize: 55, }}>84</Text>
            <Text style={{fontSize: 12, }}>CURRENT RATING</Text>
          </View>
          <View style={styles.ratingRight}>
            <Text style={{fontSize: 14, color: '#A8A8A8', lineHeight: 20, marginTop: 10,}}>Good job Chris, your account is currently in good standing.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
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
  sixWelcomeCard: {
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
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 20,
    marginBottom: 20,
  },
  sixRatingCard: {
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
    paddingVertical: 35,
    paddingHorizontal: 20,
    height: (Dimensions.get('window').height - 120) * 0.30,
    flexDirection: 'row'
  },
  ratingLeft: {
    width: (Dimensions.get('window').width - 80) * 0.50,
    alignItems: 'center',
  },
  ratingRight: {
    width: (Dimensions.get('window').width - 80) * 0.50,
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
  }
});
