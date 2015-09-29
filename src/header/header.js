/**
 * Created by Answer1215 on 9/19/2015.
 */

class headerCtrl {
    constructor() {
        this.title = "Angular Webpack Demo";
    }
}

function expHeader() {
    return {
        restrict: 'E',
        scope: {},
        controller: headerCtrl,
        controllerAs: 'header',
        template: require('./header.html')
    };
}

export default (ngModule) => {
    if (ON_TEST) {
        require('./header.test')(ngModule);
    }
    ngModule.directive('expHeader', expHeader);
};