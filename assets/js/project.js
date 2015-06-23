import Routes from 'routes';

var Project = {
  load: function() {
    var routes = new Routes();

    routes.dispatch();
  }
};

Project.load();
