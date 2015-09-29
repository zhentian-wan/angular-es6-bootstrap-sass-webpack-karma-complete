/**
 * Created by Answer1215 on 9/20/2015.
 */
export default (ngModule) => {
    ngModule.config(($compileProvider, $httpProvider) => {
        $compileProvider.debugInfoEnabled(false);
        $httpProvider.useApplyAsync(true);
        console.log("production env");
    });
};