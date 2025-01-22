import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


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
      <View style={styles.photo_grid}>
      <Image source={require('./assets/gridPhotos/testimg1.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg2.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg3.jpg')}
      style={styles.photo_grid_size}/>
      </View>
      <View style={styles.photo_grid}>
      <Image source={require('./assets/gridPhotos/testimg4.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg5.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg6.jpg')}
      style={styles.photo_grid_size}/>
      </View>
      <View style={styles.photo_grid}>
      <Image source={require('./assets/gridPhotos/testimg7.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg8.jpg')}
      style={styles.photo_grid_size}/>
      <Image source={require('./assets/gridPhotos/testimg9.jpg')}
      style={styles.photo_grid_size}/>
      </View>
      


    </View>


      {/* Tool bar */}
      <View style={styles.toolbar}>
        <View style={styles.button}>
          <Image 
          source={require('./assets/home.png')}
          style={{height: '60%', width: '60%'}} />
        </View>
        <View style={styles.button}>
          <Image
          source={require('./assets/search.png')}
          style={{height: '50%', width: '50%'}} />
        </View>
        <View style={styles.button}>
          <Image
            source={require('./assets/reel.png')}
            style={{height: '50%', width: '50%'}} />
        </View>
        <View style={styles.button}>
          <Image
            source={require('./assets/shop.png')}
            style={{height: '55%', width: '55%'}} />
        </View>
        <View style={styles.button}>
          <Image
            source={require('./assets/profile.png')}
            style={{height: '50%', width: '50%'}} />
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
    justifyContent: 'flex-end',
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

 member_button: {

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
  height: 120,
  width: 120,
 },

});
