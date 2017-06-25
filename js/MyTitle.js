/* global React React.DOM */

//First component
// var MyFirstComponent = function() {
//   return React.createElement('div', {style: {color: 'blue'}},//elementName, attrs
//     React.createElement('h1', null, "This is my first component!")
//   );
// };
//
// ReactDOM.render(
//   React.createElement(MyFirstComponent),
//   document.getElementById("app")
// );

//First component

//Alternate way to create nested component using React Class which actually
// creates a class and then you can have multiple instances of that class.

var React = require('react');//eliminate usage of globals like using React variabled directly

var ce = React.createElement;
var MyTitle = React.createClass({
  render () {
    return(
      ce('div', null,
        //React.createElement('h1', null, 'Check out this component!')
        ce('h1', {style:{color:this.props.color}}, this.props.title),
        ce('h2', null, 'hi')
      )
    )
  }
});

// var MyTitle = function () {
//   return (
//     React.createElement('div', null,
//       React.createElement('h1', null, 'Check out this component!')
//     )
//   );
// };

module.exports = MyTitle;
