import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import AppCtrl from './app.controller.js';
import AppComponent from './app.component.js'
import Components from '../components/components';
import Common from '../common/common';
import '../style/app.css';
import DataService from '../services/mockService'


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, uiBootstrap, Components.name, Common.name])
    .directive('app', AppComponent)
    .service('DataService', DataService)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;