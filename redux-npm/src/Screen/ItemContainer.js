import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {buyCake, buyIceCream} from '../reduxFeatures';

function ItemContainer(props) {
  return (
    <View>
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
  buyBtn: {
    marginTop: 20,
    borderWidth: 1,
    alignSelf: 'center',
    padding: 5,
  },
});

export default connect(
  //   null,
  mapStateToProps,
  mapDispatchToProps,
)(ItemContainer);
