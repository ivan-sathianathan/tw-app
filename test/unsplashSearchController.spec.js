describe('UnsplashSearchController', function() {
  beforeEach(module('UnsplashSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('UnsplashSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.unsplash.com/search/photos?client_id=e2e1b616b7a9e9b9db8c754d303d4f8e1ab79b4a425c8b90019813c960093325&query=hello")
        .respond(
          { items: items }
        );
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});
