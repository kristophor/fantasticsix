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

export default function FeedCard({props}) {

  return (
      <View style={styles.sixLoanScore}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.loanCardLeft}>
            <Avatar.Image size={55} source={require('../assets/images/robot-dev.png')} />
          </View>
          <View style={{...styles.loanCardRight, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 15, color: '#A8A8A8', marginTop: 10, fontWeight: 'bold'}}>Bill Johnson</Text>
            <Text style={{fontSize: 12, color: 'black'}}>21 MINS</Text>
          </View>
        </View>
        <Text style={{ marginTop: 10, lineHeight: 16 }}>I am implement the beest practices that are available so that we can get things done</Text>
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
