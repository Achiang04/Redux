import React from 'react';
import {connect} from 'react-redux';
import {buyCola} from '../reduxFeatures';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ColaContainer(props) {
  return (
    <View style={styles.container}>
      <Text>Number Of Cola = {props.numOfCola}</Text>
      <TouchableOpacity onPress={props.buyCola}>
        <Text style={styles.buyBtn}>Buy Cola</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCola: state.numOfCola,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCola: () => dispatch(buyCola()),
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

export default connect(mapStateToProps, mapDispatchToProps)(ColaContainer);
