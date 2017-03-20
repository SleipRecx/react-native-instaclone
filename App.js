import React, { Component } from 'react'
import { View, NavigatorIOS, StatusBar } from 'react-native'
import PhotoGrid from 'react-native-photo-grid'
import ImageView from './src/ImageView'

const App = () =>
  <View style={{flex: 1}}>
    <StatusBar
      backgroundColor="#005f6b"
      barStyle="light-content"
    />
    <NavigatorIOS
     initialRoute={{
       component: ImageView,
       title: 'Instagram Clone',
       backButtonTitle: 'Back',
       passProps: {}
     }}
     style={{ flex: 1 }}
     barTintColor='#125687'
     tintColor='white'
     titleTextColor='white'
   />
  </View>

export default App
