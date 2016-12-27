import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,width,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

//结果
export default class ResultPage extends Component {
  constructor(props)
    {
        super(props);
        this.state = {
                      message:'请等待...',
                      test:'',
        }
    } 

  componentWillMount() {
        console.log(this.props.data);
        fetch("http://kangyuncsh.unishep.cn/indexAPI.php",{
            method: 'POST',
            body: this.props.data,
        })  
        .then((response) => response.json())  
        .then((responseJson) => {
           this.setState({
             code:responseJson.code,
             img_id:responseJson.img_id,
             message:responseJson.message,
             object:responseJson.object,
             test:responseJson.test,
             tag:responseJson.tag,
            })
        })
        .catch((error)=>{
            console.log(error);    
          }             
        )        
        .done();  
    } 


  render() { 
    return (  
      <View style = {styles.container}>
        <View style={{margin: 100}}>
          <Text onPress={Actions.IndexPage}>结果</Text>
        </View>
        <View style = {styles.result}>
            <Text>message:{this.state.message}</Text>
            <Text>{this.state.test}</Text>
        </View>
			</View>
    )
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    result: {
        flex: 0,
        justifyContent: 'space-around',
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});