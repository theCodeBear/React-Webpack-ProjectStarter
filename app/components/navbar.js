var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Navbar = React.createClass({
  render: function() {
    return (
      <div>
        <h1> This be the navbar </h1>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Navbar;
