import React from 'react';
import { StackNavigator, TabBarBottom } from 'react-navigation';

import Test from '../profile/screens/Test';
import ProfileList from '../profile/screens/ProfileList';
import ProfileAdd from '../profile/screens/ProfileAdd';
// import ProfileEdit from '../profile/screens/ProfileEdit';
import ProfileDetail from '../profile/screens/ProfileDetail';

const RootNavigator = StackNavigator({
  Test: {
    screen: Test
  },
  ProfileList: {
    screen: ProfileList
  },
  ProfileAdd: {
    screen: ProfileAdd
  },
  // ProfileEdit: {
  //   screen: ProfileEdit
  // },
  ProfileDetail: {
    screen: ProfileDetail
  },
})

export default RootNavigator;