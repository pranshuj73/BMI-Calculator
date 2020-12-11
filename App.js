import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { AppNavigator } from './routes/navigator';

export default function App() {
 return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={styles.container}>
       <AppNavigator />
       <StatusBar backgroundColor='#03B898' barStyle="light-content" />
     </View>
   </TouchableWithoutFeedback>
 );  
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
 },
});
