/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router,Scene} from 'react-native-router-flux';

import IndexPage from './app/views/IndexPage.js';
import ShotPage from './app/views/ShotPage.js';
import MallPage from './app/views/MallPage.js';
import HistoryPage from './app/views/HistoryPage.js';
import CommunityPage from './app/views/CommunityPage.js';
import TaskPage from './app/views/TaskPage.js';
import RegistryPage from './app/views/RegistryPage.js';
import LoginPage from './app/views/LoginPage.js';
import ResultPage from './app/views/ResultPage.js';
import fetchDemo from './app/views/fetchDemo.js';
import ShotPreviewPage from './app/views/ShotPreviewPage.js';
//安卓主界面
export default class KangyunApp extends Component {
  render() {
    return <Router>
          <Scene key="root">
            <Scene key="IndexPage" component={IndexPage} title="首页" initial={true}/>
            <Scene key="ShotPage" component={ShotPage} title="拍照"/>
            <Scene key="MallPage" component={MallPage} title="商城"/>
            <Scene key="HistoryPage" component={HistoryPage} title="历史"/>
            <Scene key="CommunityPage" component={CommunityPage} title="社区"/>
            <Scene key="TaskPage" component={TaskPage} title="任务"/>
            <Scene key="LoginPage" component={LoginPage} title="登陆"/>
            <Scene key="RegistryPage" component={RegistryPage} title="注册"/>
            <Scene key="ResultPage" component={ResultPage} title="结果"/>
            <Scene key="fetchDemo" component={fetchDemo} title="demo" />
            <Scene key="ShotPreviewPage" component={ShotPreviewPage} title="预览" />
          </Scene>
    </Router>

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('KangyunApp', () => KangyunApp);
