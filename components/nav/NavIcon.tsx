import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, Animated, Text } from 'react-native'
import { SetterOrUpdater, useRecoilState } from 'recoil';

const animationSpeed = 15;

interface NavIconProps {
  navigation: any,
  path: string,
  iconName: string,
  iconLib: any,
  toValue: number,
  tabOffSetValue: any,
  currPage: string,
  setCurrPage: SetterOrUpdater<string>
}

const NavIcon: React.FC<NavIconProps> = ({ navigation, path, iconName, iconLib, tabOffSetValue, toValue, currPage, setCurrPage }) => {

  const SpecificIconLib = iconLib;

  return (
    <TouchableOpacity onPress={() => {

      Animated.spring(tabOffSetValue, {
        toValue,
        useNativeDriver: true,
        speed: animationSpeed,
        bounciness: 5
      }).start();

      navigation.navigate(path)

      setCurrPage(path)

    }}>
      <SpecificIconLib name={iconName} size={25} style={{ color: path === currPage ? 'white' : 'gray' }} />
    </TouchableOpacity>
  )
}

export default NavIcon