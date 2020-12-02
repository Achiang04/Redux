import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text style={styles.text}>All Stack Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CakeContainer')}>
        <Text style={styles.btn}>Go To Cake Container</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ColaContainer')}>
        <Text style={styles.btn}>Go To Cola Container</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HooksCakeContainer')}>
        <Text style={styles.btn}>Go To Hooks Cake Container</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('IceCreamContainer')}>
        <Text style={styles.btn}>Go To Ice Cream Container</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewCakeContainer')}>
        <Text style={styles.btn}>Go To New Cake Container</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ItemContainer')}>
        <Text style={styles.btn}>Go To Item Container</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UsersContainer')}>
        <Text style={styles.btn}>Go To Users Container</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HooksUsersContainer')}>
        <Text style={styles.btn}>Go To Hooks Users Container</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginTop: 10,
  },
  btn: {
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    padding: 5,
    // backgroundColor: 'red',
  },
});
