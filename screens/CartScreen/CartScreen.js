import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Header} from '../../components';

export const CartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Header
        title="Cart Screen"
        searchButton
        saveButton
        backButton
        navigation={navigation}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Cart Screen</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#111',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#fff'}}>Go to Home Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
