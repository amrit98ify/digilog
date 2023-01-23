import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SettingsPage } from '../pages/Settings'
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
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

  function getActivePage(pageName) {
    if (pageName === currentPage) {
      return "#0C418C";
    }
    
    return "lightgray"
  }

  // if (currentPage === 'settings') {
  //   return (
  //     <SettingsPage/>
  //   )
  // }
  return (
    <SafeAreaView style={styles.container}>
      { (currentPage === 'home')
        ?
      <View style={{flexDirection: 'row', padding: 20, justifyContent: "space-between"}}>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.textStyle}>Welcome, </Text>
        <Text style={[styles.textStyle, styles.boldText]}>{userName}</Text>
        </View>
        
        <View style={{flexDirection: 'row'}}>
          {/* <TouchableOpacity onPress={() => AsyncStorage.setItem('userName', '')}>
            <SimpleLineIcons name="logout" size={24} color="white" />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => setCurrentPage('settings')}>
            <Ionicons name="ios-settings" size={24} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
        : (currentPage === 'todo')
        ?
        <Text>Todo Page</Text>
        : (currentPage === 'expense')
        ?
        <Text>Expense Tracker</Text>
        :
        <Text>Settings</Text>
      }
    <View style={{height: 50, width: "100%", backgroundColor: 'white', justifyContent: "center", flexDirection: 'column'}}>
      <View style={{justifyContent: "space-evenly", flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => setCurrentPage('todo')}>
          <FontAwesome5 name="th-list" size={40} color={getActivePage('todo')} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setCurrentPage('home')}>
          <FontAwesome5 name="home" size={40} color={getActivePage('home')} style={{paddingHorizontal: 10}} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setCurrentPage('expense')}>
          <FontAwesome5 name="money-check" size={40} color={getActivePage('expense')} />
        </TouchableOpacity>

      </View>
      </View>
    <StatusBar style="auto" />
  </SafeAreaView>
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
