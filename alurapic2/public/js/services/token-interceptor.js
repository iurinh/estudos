angular.module('alurapic')
.factory('TokenInterceptor', function($window, $q, $location){
    var interceptor = {};

    interceptor.response = function(response){

        var token = response.headers('x-access-token');

        if(token){
            console.log("Armazenando token no navagador")
            $window.sessionStorage.token = token;
        }

        return response;

    };

    interceptor.request = function(config){

        config.headers = config.headers || {};

        if($window.sessionStorage.token){
            console.log('Adicionando token na sessao do navegador');
            config.headers['x-access-token'] = $window.sessionStorage.token;
        }

        return config;

    };

    interceptor.responseError = function(rejection){
        
        if(rejection && rejection.status == 401){
            delete $window.sessionStorage.token;
            $location.path('/login');
        }

        return $q.reject(rejection);
    }

    return interceptor;

})