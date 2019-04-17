/**
 * Created by Answer1215 on 9/19/2015.
 */
class bodyCtrl {
  /**ngInject */
  constructor($rootScope, $window) {
    $rootScope.$watch(
      () => {
        return $window.ab_test;
      },
      newVal => {
        if (!!newVal) {
          this.hasAb = true;
        }
      }
    );
  }
}

function expBody() {
  return {
    restrict: "E",
    scope: {},
    controller: bodyCtrl,
    controllerAs: "vm",
    template: require("./body.html")
  };
}

export default ngModule => {
  ngModule.directive("expBody", expBody);
};
