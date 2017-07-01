/**
 * React Router has been updated.
 * Please check for updated version here:
 * https://github.com/ReactTraining/react-router/issues/4752
 */


// ReactDOM.render(
//   React.createElement(MyFirstComponent),
//   document.getElementById("app")
// );
const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./Layout');
const Landing = require('./Landing');
const Search = require('./Search');
const Details = require('./Details')
const {shows} = require('../data.json');
const {HashRouter, Route, IndexRoute, browserHistory} = require('react-router-dom');

//BETTER
//const {Router, Route, hashHistory} = ReactRouter;
//OR
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const hashHistory = ReactRouter.hashHistory;

// const App = () => (
//   <HashRouter history={browserHistory}>
//     <div>
//       <Route exact path='/' component={Landing}/>
//       <Route path='/search' component={Search} shows={shows}/>
//       <Route path='/details/:id' component={Details}/>
//     </div>
//   </HashRouter>
// )

const App = React.createClass ({
  assignShow(nextState, replace) {
      console.log('im here', nextState, replace)
      const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

    //cant find the id in route hence redirect to main page
      if(showArray.length < 1) {
        return replace('/')
      }

      Object.assign(nextState.params, showArray[0])
      return nextState
  },
  render () {
    return (
        <HashRouter history={browserHistory}>
          <div>
            <Route exact path='/' component={Landing}/>
            <Route path='/search' component={Search} shows={shows}/>
            <Route path='/details/:id' component={Details} onEnter={this.assignShow}/>
          </div>
        </HashRouter>
    )
  }
})


//Ideally preferred not working for now
// const App = () => (
//   <HashRouter history={browserHistory}>
//     <div>
//       <Route path='/' component={Layout}>
//         <IndexRoute component={Landing}/>
//         <Route path='/search' component={Search}/>
//       </Route>
//     </div>
//   </HashRouter>
// )



ReactDOM.render(
  <App/>,
  document.getElementById("app")
)
