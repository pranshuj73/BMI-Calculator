import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Result({ route, navigation }) {
  const { weight, height } = route.params;
  const intWeight = parseFloat(weight);
  const intHeight = parseFloat(height)/100;
  const bmi = parseFloat((intWeight/(intHeight**2)).toFixed(2));


  var message = `${((intHeight**2)*18.5).toFixed(2)} kg - ${((intHeight**2)*25).toFixed(2)} kg`;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.resultText}>Your BMI</Text>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
          <Text style={[styles.bmiVal, styles.lightText]}>{ bmi }</Text>
          <Text style={styles.lightText}>kg/m2</Text>
        </View>
      </View>
      <View>
        <Text style={styles.bottomText}>Normal BMI weight range for the height</Text>
        <Text style={styles.bottomText}>{message}</Text>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resultText: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  bmiVal: {
    fontSize: 70,
    textAlign: 'center',
    marginRight: 5,
  },
  lightText: {
    color: '#384249',
  },
  bottomText: {
    color: '#9A9A9A',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});