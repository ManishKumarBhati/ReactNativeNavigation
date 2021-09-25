import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './action/index';
const First = ({navigation}) => {
  const myState = useSelector(state => state.changeNo);
  const dispatch = useDispatch();
  return (
    <View styles={styles.container}>
      <Button title="+" onPress={() => dispatch(incNumber(5))} />
      <Text>{myState}</Text>
      <Button title="-" onPress={() => dispatch(decNumber())} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default First;
