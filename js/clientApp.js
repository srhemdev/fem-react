/**
 * Created by hemdev on 6/25/17.
 */
//we can remove this now. global React React.DOM
var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./MyTitle');

var ce = React.createElement;


var TitleFactory = React.createFactory(MyTitle);
/*
var MyFirstComponent = function () {
  return (
    React.createElement('div', null,
      // React.createElement(MyTitle, null), //instance of the class
      // React.createElement(MyTitle, null),
      // React.createElement(MyTitle, null)
    //Alternate way to call MyTitle rather than using React.createElement each time
      TitleFactory(null),
      ce(MyTitle, null),
      React.createElement(MyTitle, null)
    )
  );
};
*/


//Using props
var MyFirstComponent = function () {
  return (
    React.createElement('div', null,
      TitleFactory({title: 'Props are great!!', color: 'blue'}),
      ce(MyTitle, {title: 'Use Props everywhere', color: 'red'}),
      React.createElement(MyTitle, {title: 'Props are the best', color: 'green'})
    )
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
