import React from 'react';
import {connect} from 'react-redux';
import {buyIceCream} from '../reduxFeatures';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function IceCreamContainer(props) {
  return (
    <View style={styles.container}>
      <Text>Number Of Ice Creams = {props.numOfIceCream}</Text>
      <TouchableOpacity onPress={props.buyIceCream}>
        <Text style={styles.buyBtn}>Buy Ice Cream</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
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

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
