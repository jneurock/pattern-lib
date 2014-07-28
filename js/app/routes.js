// Add routes here
App.Router.map(function() {
  
  // Atoms (Components)
  this.resource('atoms', function() {

    // Sub-routes here
    this.route('hs-button');
  });

  // Molecules (Modules)
  this.resource('molecules', function() {

    // Sub-routes here
  });

  // Organisms (Layouts)
  this.resource('organisms', function() {

    // Sub-routes here
  });

  // Templates
  this.resource('templates', function() {

    // Sub-routes here
  });
});

// Modify high-level routes to use the same template
App.AtomsRoute = Ember.Route.extend(App.AtomicRouteMixin);
App.MoleculesRoute = Ember.Route.extend(App.AtomicRouteMixin);
App.OrganismsRoute = Ember.Route.extend(App.AtomicRouteMixin);
App.TemplatesRoute = Ember.Route.extend(App.AtomicRouteMixin);