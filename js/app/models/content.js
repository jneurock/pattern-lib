App.Content = Ember.Object.extend();

App.Content.reopenClass({
  find: function(id) {

    try {

      if (id == null) {

        throw 'Missing required argument: id';
      }

      return $.ajax('posts/' + id + '.json').then(function(response) {

        if (response && response.content) {

          return response.content;
        }
      });

    } catch(e) {

      console.error('App.Content.find:');
      console.error(e);
    }
  }
});