import AppCtrl from './app.controller.js';

let appComponent = () => {
    return {
        template: require('./app.html'),
        controller: AppCtrl,
        controllerAs: 'app'
    };
};
export default appComponent;