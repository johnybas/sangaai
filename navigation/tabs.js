import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Categories, Cart, Profile} from '../screens';
import {COLORS, icons} from '../constants';
import {TabIcon} from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              iconFocused={icons.homeFilled}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.category}
              iconFocused={icons.categoryFilled}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.cart}
              iconFocused={icons.cartFilled}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.profile}
              iconFocused={icons.profileFilled}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
