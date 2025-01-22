import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            source={require('./assets/profile_picture.jpeg')} 
            style={styles.profileImage} 
          />
        </View>
        <View style={styles.statsSection}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statTitle}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2.3k</Text>
            <Text style={styles.statTitle}>Members</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statTitle}>Admins</Text>
          </View>
        </View>
      </View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.bioBold}>OOTD Everyday</Text>
          <Text style={styles.bioText}>fit check!</Text>
          <Text style={styles.bioText}>you know we'll hype you up.</Text>
        </View>



      {/* Tool bar */}
      <View style={styles.toolbar}>
        <View style={styles.button}>
          <Image 
            source={require('./assets/home.png')} 
            style={{ height: '60%', width: '60%' }} 
          />
        </View>
        <View style={styles.button}>
          <Image 
            source={require('./assets/search.png')} 
            style={{ height: '50%', width: '50%' }} 
          />
        </View>
        <View style={styles.button}>
          <Image 
            source={require('./assets/reel.png')} 
            style={{ height: '50%', width: '50%' }} 
          />
        </View>
        <View style={styles.button}>
          <Image 
            source={require('./assets/shop.png')} 
            style={{ height: '55%', width: '55%' }} 
          />
        </View>
        <View style={styles.button}>
          <Image 
            source={require('./assets/profile.png')} 
            style={{ height: '50%', width: '50%' }} 
          />
        </View>
      </View>

      {/* Alert Button */}
      <TouchableOpacity 
        style={styles.alert_button} 
        onPress={() => Alert.alert('Alert', 'Alert Button pressed')}
      >
        <Text style={styles.alert_text}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    height: 100, 
    justifyContent: 'space-between', 
    top: 100,
  },
  profileSection: {
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsSection: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statTitle: {
    fontSize: 14,
    color: '#555',
  },
  bioSection: {
    padding: 10,
    marginTop: 120, 
  },
  bioBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bioText: {
    fontSize: 14,
    color: '#333',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  alert_button: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 10,
    position: 'absolute',
    bottom: 60, 
    left: 20,
    right: 20,
  },
  alert_text: {
    color: 'white',
    fontSize: 20,
  },

});

