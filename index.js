/*
import { AppRegistry } from 'react-native';
import App from './App'; 
import Splash from './components/Splash'

AppRegistry.registerComponent('my-new-app', () => Splash)
*/

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);