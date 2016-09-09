describe('factory: Search', function() {
  var search;

  beforeEach(module('UnsplashSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .expectGET("https://api.unsplash.com/search/photos?client_id=e2e1b616b7a9e9b9db8c754d303d4f8e1ab79b4a425c8b90019813c960093325&query=hello")
      .respond(
        { items: items }
      );
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
    httpBackend.flush();
  });
});
