import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	AppRegistry, 
	Image, 
	width, 
	TouchableHighlight,
	TouchableOpacity,
	Alert,} from 'react-native';
import { Actions,  Scene, Router} from 'react-native-router-flux';
//主容器 container
//头部状态栏，登陆和帮助模块 topstate
//拍照模块	focusmodule
//用户操作模块	operationmodule
//空模块，布局用	NullTopSpace,NullBottomSpace
//第一排按钮容器	TopWarp
//分隔竖线	NullVerticalSpace
//分隔横线	NullCrossSpace
//第二排按钮	BottomWarp
export default class IndexPage extends React.Component {

  render() {
    return ( 

    	<View style={styles.container}>
    		
	      	<View style={styles.TopState}>
	      		<View style={styles.LoginModule}>
	      			
		        </View>
		        <View style={styles.HelpModule}>
		        
		        </View>
    	</View>
      	
	  	<View style={styles.FocusModule}>
			<Image source={require('../../resources/bg.png')} style={styles.ImageFocus}>
				<TouchableOpacity style={styles.ImageRobot} onPress={Actions.ShotPage}>
					<Image source={require('../../resources/robot.png')} 
					style={styles.ImageRobot}/>
				</TouchableOpacity>
			</Image>
	  	</View>
      	
      	<View style={styles.MainWarpModule}>
      		<View style={styles.OperationmWarp}>
      			
      			<View style={styles.NullTopSpace}></View>
      			
	      		<View style={styles.TopWarp}>
	      			<Image source={require('../../resources/history.png')} style={styles.Imagebutton}>
		      		<View style={styles.HistoryModule}>
		      			
			        </View>
			        </Image>
			        	
				        <View style={styles.NullVerticalSpace}>
					        <Image source={require('../../resources/vertical.png')}>
					        </Image>
					    </View>
			        <Image source={require('../../resources/task.png')} style={styles.Imagebutton}>
			        <View style={styles.TaskModule}>
			        </View>
			        </Image>
				</View>
				
				<View style={styles.NullCrossSpace}>
					        <Image source={require('../../resources/cross.png')} style={styles.ImageVertical}>
					        </Image>
			    </View>
			    
				<View style={styles.BottomWarp}>
					<Image source={require('../../resources/mall.png')} style={styles.Imagebutton}>
					<View style={styles.MallModule}>
			        </View>
			        </Image>
			        	
			        	<View style={styles.NullVerticalSpace}>
					        <Image source={require('../../resources/vertical.png')}>
					        </Image>
					    </View>
			        <Image source={require('../../resources/community.png')} style={styles.Imagebutton}>
			        <View style={styles.CommunityModule}>
			        </View>
			        </Image>
				</View>
				
				<View style={styles.NullBottomSpace}></View>		  
			</View>		  
      	</View>
        
      </View>
    )
  }
}
//css样式设置
var styles = StyleSheet.create({
	container: {
		flex: 10,
		flexDirection: 'column',

	},
	TopState: {
		flex: 1.5,
		flexDirection: 'row',
		backgroundColor: '#1cb2e5',
	},
	FocusModule: {
		flex: 5,
		flexDirection: 'column',
		
	},
	ImageFocus: {
		flex: 1,
		width:width, 
   		height:498*width/700,
	},
	ImageRobot: {
		justifyContent: 'center', 
		alignItems: 'center',
		position: 'relative',
	},
	MainWarpModule: {
		flex: 4.25,
		flexDirection: 'column',
		alignItems: 'center',
	},
	OperationmWarp: {
		flex: 0,
		flexDirection: 'column',
	},
	TopWarp: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		marginBottom: 10,
	},
	BottomWarp: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		justifyContent: 'space-around',
		marginTop: 10,
	},
	Imagebutton: {
		width: 80,
		height: 100,
	},
	HistoryModule: {
		width: 100,
		height: 120,		
		flexWrap: 'wrap',
		paddingRight: 20,
	},
	TaskModule: {
		width: 100,
		height: 120,		
		flexWrap: 'wrap',
		
	},
	MallModule: {
		width: 100,
		height: 120,
		
	},
	CommunityModule: {
		width: 100,
		height: 120,
		paddingLeft: 20,
	},
	NullTopSpace: {
		height: 20,
	},
	NullBottomSpace: {
		height: 20,
	},
	NullCrossSpace: {
		flex: 0,
		alignItems: 'center',
	},
	NullVerticalSpace: {
		width: 20,
		alignItems: 'center',
	}
})

AppRegistry.registerComponent('IndexPage', () => IndexPage);