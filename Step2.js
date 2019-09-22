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
import { List } from 'react-native-paper';

import Transactions from '../datasets/transactions';
export default function Step2Screen() {

  return (
    <View style={styles.container}>
      <View style={styles.tinyWelcomeStrip}>
        <View style={styles.sixWelcomeCard}>
          <View style={{alignItems: 'flex-start', marginLeft: 15, width: (Dimensions.get('window').width - 80) * 0.50,}}>
            <Text style={{fontWeight: 'bold', fontSize: 14,}}>Step 2 of 2</Text>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 15, width: (Dimensions.get('window').width - 80) * 0.50,}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => this.props.navigate('NextStep')}>
                <Text style={{fontWeight: 'bold', fontSize: 14, marginRight: 5}}>Complete</Text>
                <Ionicons
                  name={'ios-arrow-forward'}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          </View>



        </View>
      </View>
      <View style={styles.sixLoanScore}>
        <View style={styles.loanRatingLeft}>
          <Text style={{fontWeight: 'bold', fontSize: 55, }}>784</Text>
          <Text style={{fontSize: 12, }}>LOAN SCORE</Text>
        </View>
        <View style={styles.loanRatingRight}>
          <Text style={{fontSize: 13, color: '#A8A8A8', lineHeight: 18, marginTop: 10,}}>Based on your loan request, you have been awarded a loan score of 784.</Text>
        </View>
      </View>
      <View style={styles.sixLoanScoreBreakdown}>
        <List.Item
          description="Based on your predict current and future financial activities."
          left={props => <Text style={styles.goodScore}>484</Text>}
        />
        <List.Item
          description="Based on your verified current credit ratings."
          left={props => <Text style={styles.goodScore}>200</Text>}
        />
        <List.Item
          description="Based on your payment behaviour with past Fantasix loans."
          left={props => <Text style={styles.goodScore}>100</Text>}
        />
      </View>
    </View>
  );
}

Step2Screen.navigationOptions = ({ navigation }) => {
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
  sixLoanScore: {
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
    paddingVertical: 25,
    paddingHorizontal: 20,
    height: (Dimensions.get('window').height - 120) * 0.25,
    flexDirection: 'row'
  },

  sixLoanScoreBreakdown: {
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
    paddingHorizontal: 20,
    height: (Dimensions.get('window').height - 120) * 0.45,
    marginVertical: 20,
  },
  loanRatingLeft: {
    width: (Dimensions.get('window').width - 80) * 0.50,
    alignItems: 'center',
  },
  loanRatingRight: {
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
  },
  goodScore: {
    color: '#00FF00',
    marginTop: 20,
    fontSize: 20,
    marginRight: 10
  }
});
