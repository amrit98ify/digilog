import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SettingsPage() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('userName')
        if(value !== null) {
          setUserName(value);
        }
      } catch(e) {
        // error reading value
      }
    }) ();
  },[])

  
    return (
      <>
      <Text>Welcome to Settings Page</Text>
      </>
    )
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C418C',
    justifyContent: "space-between"
    // alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 20    
  },
  boldText: {fontWeight: "bold"},
  button: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 30,
  }
});
