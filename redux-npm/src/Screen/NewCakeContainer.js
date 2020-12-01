import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../reduxFeatures';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function NewCakeContainer(props) {
  return (
    <View style={styles.container}>
      <Text>Number Of Cakes = {props.numOfCakes}</Text>
      <TouchableOpacity onPress={props.buyCake}>
        <Text style={styles.buyBtn}>Buy Cake</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
