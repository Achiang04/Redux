import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../reduxFeatures';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function CakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.container}>
      <Text>Number Of Cakes = {props.numOfCakes}</Text>
      <TextInput
        value={number}
        onChangeText={(e) => setNumber(e)}
        placeholder={'Text Here ...'}
      />
      <TouchableOpacity onPress={() => props.buyCake(number)}>
        <Text style={styles.buyBtn}>Buy {number} Cake</Text>
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
    buyCake: (number) => dispatch(buyCake(number)),
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

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
