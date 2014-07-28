// Use this mixin for high-level atomic routes
App.AtomicRouteMixin = Ember.Mixin.create({
  renderTemplate: function() {

    this.render('atomic');
  }
});

// Use this mixin for routes with post content
App.ContentRouteMixin = Ember.Mixin.create({
  actions: {
    toggleContent: function() {

      var hide = App.get('hideContent');

      App.set('hideContent', !hide);
    }
  },
  model: function() {

    var id = this.get('contentId');

    if (id != null) {
      
      return App.Content.find(id);
    }
  }
});