import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,width,Dimensions,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NativeModules from 'NativeModules';

//拍照预览界面
export default class IndexPage extends Component {
    constructor(props){
        super(props);     
    }
componentWillMount(){
      this.props.data=this.props.data.replace(/[\r\n]/g, "");
      this.imageform = "data:image/jpg;base64,";
      this.props.data = this.imageform + this.props.data;
      //console.log(this.props.data);
  }


  render() {
    return (
      <View style = {styles.container}>      
        <View style={styles.imageView}>
          <Image style={styles.image} source={{uri:this.props.data}}/>
        </View>

        <View style = {styles.submit}>
          <TouchableHighlight style = {styles.wrapper} onPress = {()=>Actions.ResultPage(this.props.data)}>
              <Text>点击开始测试</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
  submit: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapper:{
        padding: 15,
        backgroundColor: '#eeeeee',
    },
  imageView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:120,
  },
  image: {
    marginTop:120,
    height: 300,
    width: 300,
  }
});