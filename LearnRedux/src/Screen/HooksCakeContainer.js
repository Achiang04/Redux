import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {buyCake} from '../reduxFeatures';

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Number Of Cakes = {numOfCakes}</Text>
      <TouchableOpacity onPress={() => dispatch(buyCake())}>
        <Text style={styles.buyBtn}>Buy Cake</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 30,
  },
  buyBtn: {
    marginTop: 20,
    borderWidth: 1,
    alignSelf: 'center',
    padding: 5,
  },
});
