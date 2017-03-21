import { DataService } from '../../services/mockService'

class HomeController {
    constructor($state, DataService) {
        this.name = 'home';
        this.dataList = [];
        this.$state = $state;
        this.dataService = DataService;
    }

    getMockupData() {
        this.dataList = this.dataService.loadData();
    }

    changeThisName() {
        this.name = 'Home-Changed';
    }

    goToNew() {
        this.$state.go('new');
    }
}

export default HomeController;