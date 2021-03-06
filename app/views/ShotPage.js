import React, { Component } from 'react';
import { View, Text,Dimensions,StyleSheet,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';

//拍照页面
export default class ShotPage extends Component {
  render() {
    return (
        <View style ={styles.container}>
            <Camera
                ref={(cam)=>{
                    this.camera=cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}
                captureTarget={Camera.constants.CaptureTarget.memory}>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
            </Camera>
        </View>
    );
  }
  //拍照
  takePicture(){
      this.camera.capture()
      .then((data)=>{Actions.ShotPreviewPage(data)})
      .catch(err=>console.error(err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
