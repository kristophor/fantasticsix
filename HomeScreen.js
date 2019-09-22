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
import { List } from 'react-native-paper';

import Transactions from '../datasets/transactions';
import LoansCard from './LoansCard';
export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.tinyWelcomeStrip}>
        <View style={styles.sixWelcomeCard}>
          <View style={{alignItems: 'flex-start', marginLeft: 15, width: (Dimensions.get('window').width - 80) * 0.40,}}>
            <Text style={{fontWeight: 'bold', fontSize: 14,}}>Welcome Back, Chris!</Text>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 15, width: (Dimensions.get('window').width - 80) * 0.60,}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('RequestLoan')}>
                <Ionicons
                  name={'ios-add'}
                  size={18}
                />
                <Text style={{fontWeight: 'bold', fontSize: 14, }}>Request a Loan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <LoansCard
          campaignTitle="I need to purchase an PX34 Camera"
          campaignDescription="I am a freelance photographer"
          campaignAmount="$5,000"
        />
        <LoansCard
          campaignTitle="I need to purchase an PX34 Camera"
          campaignDescription="I am a freelance photographer"
          campaignAmount="$5,000"
        />
        <LoansCard
          campaignTitle="I need to purchase an PX34 Camera"
          campaignDescription="I am a freelance photographer"
          campaignAmount="$5,000"
        />
      </ScrollView>
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
    backgroundColor: '#FFF',
    paddingVertical: 20,
    marginBottom: 20,
    flexDirection: 'row'
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
  goodScore: {
    color: '#00FF00',
    marginTop: 20,
    fontSize: 20,
    marginRight: 10
  }
});
