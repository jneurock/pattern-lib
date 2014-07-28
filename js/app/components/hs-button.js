App.HsButtonComponent = Ember.Component.extend({
  tagName: 'button'
});

App.AtomsHsButtonRoute = Ember.Route.extend(App.ContentRouteMixin, {
  contentId: 'hs-button'
});