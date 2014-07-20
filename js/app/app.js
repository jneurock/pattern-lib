App = Ember.Application.create();

App.Router.map(function() {
  
  this.resource('component', function() {

    this.route('hs-button');
  });
});