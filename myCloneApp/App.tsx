import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
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
      </View>

      {/* Bio */}
      <View style={styles.bioSection}>
        <Text style={styles.bioBold}>OOTD Everyday</Text>
        <Text style={styles.bioText}>fit check!</Text>
        <Text style={styles.bioText}>you know we'll hype you up.</Text>
      </View>

   {/* 2. member button */}
   <View>
    {/* free icon
    https://www.flaticon.com/free-icon/down-arrow_152415?term=arrow+down&page=1&position=91&origin=search&related_id=152415 */}
      <View>
      <TouchableOpacity onPress={() => Alert.alert('Member', 'Member Button pressed')}>
          <Text style={styles.member_text}>member <Image source={require('./assets/down-arrow.png')}
          style={{height: 18, width: 18}}/></Text>
      </TouchableOpacity>

    {/* Grid */}

    </View>
    <ScrollView>
      <View style={styles.photo_grid}>
        {/* testimg 1, 4, 7,8,9 are not showing, palaceholding testimg2 for */}
      <Image source={require('./assets/gridPhotos/testimg2.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg2.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg3.jpg')}
      style={styles.photo_grid_size}/>
      </View>
      <View style={styles.photo_grid}>
      <Image source={require('./assets/gridPhotos/testimg2.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg5.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg6.jpg')}
      style={styles.photo_grid_size}/>
      </View>
      <View style={styles.photo_grid}>
      <Image source={require('./assets/gridPhotos/testimg2.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg2.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg2.jpg')}
      style={styles.photo_grid_size}/>
      </View>
      </ScrollView>
      </View>


      {/* Tool bar */}
      <View style={styles.toolbar}>
        <View style={styles.button}>
          <Image source={require('./assets/home.png')} style={{ height: '60%', width: '60%' }} />
        </View>
        <View style={styles.button}>
          <Image source={require('./assets/search.png')} style={{ height: '50%', width: '50%' }} />
        </View>
        <View style={styles.button}>
          <Image source={require('./assets/reel.png')} style={{ height: '50%', width: '50%' }} />
        </View>
        <View style={styles.button}>
          <Image source={require('./assets/shop.png')} style={{ height: '55%', width: '55%' }} />
        </View>
        <View style={styles.button}>
          <Image source={require('./assets/profile.png')} style={{ height: '50%', width: '50%' }} />
        </View>
      </View>

      {/* Alert Button */}
      <TouchableOpacity style={styles.alert_button} onPress={() => Alert.alert('Alert', 'Alert Button pressed')}>
        <Text style={styles.alert_text}>Alert</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  
    backgroundColor: '#f9f9f9',
  },

  header: {
    flexDirection: 'row',
    paddingVertical: 20,  
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    height: 220,  
    justifyContent: 'space-between',  
  },

  profileSection: {
    alignItems: 'center',
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 2,
    marginLeft: 10,  
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
    marginTop: 20,  
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
  },
  alert_text: {
    color: 'white',
    fontSize: 20,
  },


 member_text: {
  fontSize: 18,
  fontWeight: "bold",
  textAlign: "center", 
  borderWidth: 1,
  borderColor: "#bebebe",
  padding: 5,
  margin: 20,
  borderRadius: 5,
 },

 photo_grid: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: 3,
 },

 photo_grid_size: {
  height: 90,
  width: 90,
 },
});
