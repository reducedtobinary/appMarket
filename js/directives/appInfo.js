app.directive('appInfo', function()    
 {
  return {
    restrictive: 'E',
    scope: {
      info: '='
    },
    templateUrl:
 'js/directives/appInfo.html'
 };
 });