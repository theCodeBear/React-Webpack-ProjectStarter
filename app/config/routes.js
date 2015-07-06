var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Home = require('../components/home');
var Navbar = require('../components/navbar');


module.exports = (
  <Route name='app' path='/' handler={Navbar}>
    // routes go here...

    <DefaultRoute handler={Home} />
  </Route>
);
