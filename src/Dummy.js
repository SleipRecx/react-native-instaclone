import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PhotoGrid from 'react-native-photo-grid'
import MapView from 'react-native-maps';
import moment from 'moment'

export default class Dummy extends Component {
  constructor(){
    super()
    moment.locale('nb');
  }

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 64,
      }}>

        <Image
          source={{uri: this.props.image.url}}
          style={{width: 400, height: 400}} />
        {this.props.item.location  &&
        <MapView style={{ height: 100}}
            initialRegion={{
              latitude: this.props.item.location.latitude,
              longitude: this.props.item.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          <MapView.Marker
            coordinate={{latitude: this.props.item.location.latitude, longitude: this.props.item.location.longitude}}
            title={this.props.item.location.name}
          />
        </MapView>
      }
        <Text style={{ fontWeight: 'bold', paddingRight: 10, paddingLeft: 10, paddingTop: 5, paddingBottom: 5}}>
            {this.props.item.likes.count + ' Likes'}
          </Text>
          <Text style={{ paddingRight: 10, paddingLeft: 10 }}>{this.props.item.caption.text}</Text>
      </View>

    )
  }
}
