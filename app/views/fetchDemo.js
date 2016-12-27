import React, { Component } from 'React';
import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableHighlight,
	Alert,
	View,
    width,

} from 'react-native';
import ResultPage from './ResultPage';

export default class unloadApi extends Component {
    constructor(props){
        super(props);
        this.state = {showText:''};
    }
    /*gotoPage(){
        this.props.navigator.push({
            Component: ResultPage,
            params: {
                showResult: this.stase.showResult
            }
        })
    }*/
//ajax提交
componentDidMount()  {
        
        
               
            fetch("http://kangyuncsh.unishep.cn/indexAPI.php",{
                method: 'POST',
                body:  ''
            }
            
            )  
            .then((response) => response.json())  
            .then((responseJson) => {    
                console.log(responseJson.object)
                this.setState({
                    showText:responseJson.object,
                })
                       
            }).catch((error)=>{
                console.log(error);
                
             }             
            )        
            .done();  
    }

//base64turning
	Base64Result(){

	}
//图片上传
	sendImages(){

	}

	render() {
		return (
			<View style = {styles.container}>
                <TouchableHighlight style = {styles.wrapper} onPress = {this.componentDidMount}>
					<View style = {styles.button}>
						<Text>click Ajax requrest</Text>
					</View>
				</TouchableHighlight>
                <View style = {styles.button}>
						<Text>{this.state.showText}</Text>
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
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        
        backgroundColor: '#eeeeee',
        padding: 10,
    },
    result: {
        width:width,
        height:width/2,
        backgroundColor: '#eeeee1',
        padding: 10,
    },
});

AppRegistry.registerComponent('fetchDemo', ()=>fetchDemo);
