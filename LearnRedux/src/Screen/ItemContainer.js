import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {buyCake, buyIceCream} from '../reduxFeatures';

function ItemContainer(props) {
  return (
    <View style={styles.container}>
      <Text>
        Alasan kenapa ini failed karena aku ga tau cara masukin parameter di
        stack screen contoh perbedaanya bisa di liat di app js
        react-demo-tutorial
      </Text>
      <Text>Item = {props.item}</Text>
      <TouchableOpacity onPress={props.buyItem}>
        <Text style={styles.buyBtn}>Buy Items</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const disptachFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => disptachFunction(buyIceCream());

  return {
    buyItem: disptachFunction,
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
    padding: 5,
  },
});

export default connect(
  //   null,
  mapStateToProps,
  mapDispatchToProps,
)(ItemContainer);
