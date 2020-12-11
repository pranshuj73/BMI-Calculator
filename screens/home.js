import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Home({ navigation }) {
  const [weight, setWeight] = React.useState();
  const [height, setHeight] = React.useState();

  const isValid = (number) => {
    var re = /^(\d*\.)?\d+$/;
    return re.test(number) && (number != 0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Enter your weight and height to calculate your BMI</Text>
      <View style={styles.field}>
        <Text>Weight:</Text>
        <TextInput keyboardType='number-pad' onChangeText={text => setWeight(text)} value={weight} placeholder="Enter weight in kg" style={styles.inputField}/>
      </View>
      <View style={styles.field}>
        <Text>Height:</Text>
        <TextInput keyboardType='number-pad' onChangeText={text => setHeight(text)} value={height} placeholder="Enter height in cm" style={styles.inputField}/>
      </View>
      <TouchableOpacity style={styles.submitBtn} onPress={() => isValid(weight) && isValid(height) ? navigation.navigate('Result', {weight: weight, height: height}) : Alert.alert("Error", "Please check the weight and height entered. There is possibly an error in one or both fields.")}>
        <Text style={styles.textWhite}>Calculate your BMI</Text>
      </TouchableOpacity>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  instructionText: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },

  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputField: {
    marginLeft: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },

  submitBtn: {
    marginTop: 20,
    borderRadius: 50,
    paddingHorizontal: 30,
    padding: 10,
    backgroundColor: '#03B898',
  },
  textWhite: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
