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
import { Avatar } from 'react-native-paper';
import * as Progress from 'react-native-progress';

import Transactions from '../datasets/transactions';
export default function CurrentProjectsCard({props}) {

  return (
      <View style={styles.sixLoanScore}>
        <View style={{flexDirection: 'row'}}>

        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'flex-start', width: (Dimensions.get('window').width - 80) * 0.70,}}>
            <Text style={{fontSize: 15, color: '#A8A8A8', lineHeight: 25, marginVertical: 10,}}>I am looking to buy a Panasonic DX32 camera</Text>
          </View>
          <View style={{alignItems: 'flex-end', width: (Dimensions.get('window').width - 80) * 0.30,}}>
            <Text style={{fontSize: 16, marginTop: 30, color: '#00FF00', fontWeight: 'bold'}}>$5000</Text>
          </View>
        </View>
        <View>
          <View style={{marginVertical: 20}}>
            <Progress.Bar progress={0.3} width={Dimensions.get('window').width - 80} color="#999" unfilledColor="#F3FAFE" borderWidth={0} borderRadius={0} />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAFE',
    padding: 20,
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
  },

  loanCardLeft: {
    width: (Dimensions.get('window').width - 80) * 0.35,
  },
  loanCardRight: {
    width: (Dimensions.get('window').width - 80) * 0.65,
  },
});
