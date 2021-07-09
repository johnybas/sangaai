import React from 'react';
import {View, Image} from 'react-native';

import {COLORS} from '../constants';

const TabIcon = ({focused, icon, iconFocused}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
      }}>
      {focused ? (
        <Image
          source={iconFocused}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
            tintColor: COLORS.darkGreen,
          }}
        />
      ) : (
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
            tintColor: COLORS.gray900,
          }}
        />
      )}
    </View>
  );
};

export default TabIcon;
