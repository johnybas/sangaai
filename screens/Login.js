import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Login Screen</Text>
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
  );
};

export default Login;
