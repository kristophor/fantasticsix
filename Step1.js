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
import { TextInput, Button } from 'react-native-paper';

export default function Step1Screen() {

  return (
    <View style={styles.container}>
      <View style={styles.tinyWelcomeStrip}>
        <View style={styles.sixWelcomeCard}>
          <View style={{alignItems: 'flex-start', marginLeft: 15, width: (Dimensions.get('window').width - 80) * 0.50,}}>
            <Text style={{fontWeight: 'bold', fontSize: 14,}}>Step 1 of 2</Text>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 15, width: (Dimensions.get('window').width - 80) * 0.50,}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => this.props.navigate('NextStep')}>
                <Text style={{fontWeight: 'bold', fontSize: 14, marginRight: 5}}>Proceed</Text>
                <Ionicons
                  name={'ios-arrow-forward'}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            label='Project Title'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            label='Project Description'
            value={this.state.text}
            multiline={true}
            numberOfLines={10}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            label='Amount Requested'
            value={this.state.text}
            multiline={true}
            numberOfLines={10}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            label='Loan Duration'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Submit
          </Button>


        </View>
      </View>

    </View>
  );
}

Step1Screen.navigationOptions = ({ navigation }) => {
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
