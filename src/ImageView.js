import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, NavigatorIOS, TextInput, TouchableOpacity } from 'react-native'
import PhotoGrid from './PhotoGrid'
import Dummy from './Dummy'
import moment from 'moment'

export default class ImageView extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      test: '',
    }
    this.imagePressed = this.imagePressed.bind(this)
  }

  componentDidMount() {
    this.loadImages()
  }

  loadImages() {
    const url = 'https://api.instagram.com/v1/users/200173474/media/recent?access_token=200173474.7e7d823.e7373fcfc0cf4be99afe272f64f63cec'
    fetch(url)
      .then(resp => resp.json())
        .then(data => {
          const items = data.data
          this.setState({ items })
        })
        .catch(function(error) {
          console.log(error)
        })
      }

  changeView(item){
    const nextRoute = {
     component: Dummy,
     title: moment.unix(item.created_time).format("DD/MM/YYYY"),
     passProps: {
       image: item.images.standard_resolution,
       item,
     }
   }
   this.props.navigator.push(nextRoute);
  }

  imagePressed(item) {
    this.changeView(item)
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 3}}>
        <PhotoGrid
         data = { this.state.items }
         itemsPerRow = { 2 }
         itemMargin = { 2 }
         callback = {this.imagePressed}
         renderItem = { this.renderItem } />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
