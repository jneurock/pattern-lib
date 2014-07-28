// All AJAX calls should expect JSON
$.ajaxSetup({
  contentType: 'json'
});

// Extend Ember.Route so Foundation is intialized after every transition
Ember.Route.reopen({
  beforeModel: function(transition) {

    if (transition) {

      transition.then(function() {

        Ember.run.scheduleOnce('afterRender', this, function() {

          $(document).foundation();
        });
      });
    }
  }
});

App = Ember.Application.create({
  hideContent: false
});