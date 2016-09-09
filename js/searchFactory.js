unsplashSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.unsplash.com/search/photos';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          query: searchTerm,
          client_id: 'e2e1b616b7a9e9b9db8c754d303d4f8e1ab79b4a425c8b90019813c960093325'
        }
      });
    }
  };
}]);
