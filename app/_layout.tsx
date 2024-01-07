import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../store'

const Layout = () => {
  return (
    <Provider store={store}>
      <Slot></Slot>
    </Provider>
  )
}

export default Layout

const styles = StyleSheet.create({})