import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

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
});
