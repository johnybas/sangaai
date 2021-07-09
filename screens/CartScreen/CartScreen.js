import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Platform, Dimensions} from 'react-native';

import {Header, CartBody, TotalButton} from './components';
import {COLORS, SIZES} from '../../constants';

const {height} = Dimensions.get('window');

export const CartScreen = props => {
  return (
    <View style={styles.container}>
      <Header user={user} carts={carts} navigation={props.navigation} />
      {loading ? <Loader /> : <></>}
      <CartBody
        user={user}
        carts={carts}
        loadCarts={loadCarts}
        isRefreshing={isRefreshing}
        navigation={props.navigation}
      />
      {Object.keys(user).length === 0 ? (
        <></>
      ) : carts.items.length === 0 ? (
        <View />
      ) : (
        <TotalButton
          total={2999}
          cartItems={cartItems}
          cartId={cartId}
          navigation={props.navigation}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  centerLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
  },
});
