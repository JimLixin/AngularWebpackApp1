import angular from 'angular';
import Home from './home/home';
import New from './new/new';

export default angular.module('app.components', [

    Home.name,
    New.name
]);