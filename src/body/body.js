/**
 * Created by Answer1215 on 9/19/2015.
 */
class bodyCtrl{
    constructor(){

    }
}

function expBody(){
    return {
        restrict: 'E',
        scope: {},
        controller: bodyCtrl,
        controllerAs: 'body',
        template: require('./body.html')
    };
}

export default (ngModule) => {
    ngModule.directive('expBody', expBody);
};
