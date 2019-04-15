/**
 * Created by Answer1215 on 9/19/2015.
 */
function applicationLoad($window, $rootScope, $timeout) {
    /*$timeout(() => {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function() {
            callFunctionFromScript();
        }
        script.text="window.ab_test=true";
        head.appendChild(script);
    }, 100);*/

    $window.onload = () => {
        $rootScope.$watch(() => {
            return $window.ab_test;
        }, (newVal) => {
            if (!!newVal) {
                console.log('ab_test is here', newVal)
            }
        });
    }
}

export default (ngModule) => {
    ngModule.run(applicationLoad);
    require('./header/index')(ngModule);
    require('./body/index')(ngModule);
};