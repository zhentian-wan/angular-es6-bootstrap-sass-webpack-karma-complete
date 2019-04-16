/**
 * Created by Answer1215 on 9/19/2015.
 */

function beforeLoad($interval, $window, $rootScope) {
  const promise = $interval(
    () =>
      console.log("before Load, calling interval", $window.ab_test) ||
      $window.ab_test,
    800,
    40
  );

  $rootScope.$watch(
    () => {
      return $window.ab_test;
    },
    newVal => {
      if (newVal !== undefined) {
        console.log("beforeLoad, ab_test is here", newVal);
        $interval.cancel(promise);
      }
    },
    true
  );
}

function applicationLoad($interval, $window, $rootScope, $timeout) {
  $window.onload = () => {
    const promise = $interval(
      () =>
        console.log("applicationLoad, calling interval", $window.ab_test) ||
        $window.ab_test,
      800,
      40
    );

    $rootScope.$watch(
      () => {
        return $window.ab_test;
      },
      newVal => {
        if (newVal !== undefined) {
          console.log("applicationLoad, ab_test is here", newVal);
          $interval.cancel(promise);
        }
      },
      true
    );
  };
  /*
    setTimeout(() => {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.text="(function() {window.ab_test=true; window.alert(angular)})()";
        head.appendChild(script);
    }, 200);*/
}

export default ngModule => {
  ngModule.run(beforeLoad).run(applicationLoad);
  require("./header/index")(ngModule);
  require("./body/index")(ngModule);
};
