/**
 * Created by Answer1215 on 9/19/2015.
 */
function applicationLoad($interval, $window, $rootScope, $timeout) {

    $window.onload = () => {
        const promise = $interval(() => $window.ab_test, 500, 20)

        $rootScope.$watch(() => {
            return $window.ab_test;
        }, (newVal) => {
            if (newVal !== undefined) {
                console.log('ab_test is here', newVal)
                $interval.cancel(promise);
            }
        }, true);
    }
/*
    setTimeout(() => {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.text="window.ab_test=false;";
        head.appendChild(script);
    }, 200);*/


}

export default (ngModule) => {
    ngModule.run(applicationLoad);
    require('./header/index')(ngModule);
    require('./body/index')(ngModule);
};