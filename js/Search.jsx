const React = require('react');

const ShowCard = require('./ShowCard');
const {object} = React.PropTypes
const data = require('../data.json'); //Data Tunneling


//JSON.stringify(obj, replacer fn, no of SPACES)
//key is used to provide unique id
// const Search = () => (
//   <div className='container'>
//     <header className="header">
//       <h1 className='brand'>svideo</h1>
//       <input className='search-input' type='text' placeholder='Search'/>
//     </header>
//     <div className='shows'>
//       {data.shows.map((s) =>(
//         //<ShowCard show={s} key={s.imdbID}/>
//         <ShowCard {...s} key={s.imdbID}/>
//       ))}
//     </div>
//   </div>
// )


const Search = React.createClass ({
  getInitialState (props) {
      return {
        searchTerm: ''
      }
  },
  statics: {
    myFilter: function() {

    }
  },
  handleSearchTermEvent (event) {
      //Its a synthetic event not a DOM event
      this.setState({searchTerm: event.target.value})
  },
  //Binding using on change
  render() {
      return (
        <div className='container'>
          <header className="header">
            <h1 className='brand'>svideo</h1>
            <input value={this.state.searchTerm}
                   className='search-input'
                   type='text'
                   placeholder='Search'
                   onChange={this.handleSearchTermEvent}
            />
          </header>
          <div className='shows'>
            {data.shows
              .filter((show) => `${show.title} ${show.description}`
                                  .toUpperCase()
                                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
              .map((s) => (
              //<ShowCard show={s} key={s.imdbID}/>
              <ShowCard {...s} key={s.imdbID}/>
            ))}
          </div>
        </div>
      )
  }
})

// class Search extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         <header className="header">
//           <h1 className='brand'>svideo</h1>
//           <input className='search-input' type='text' placeholder='Search'/>
//         </header>
//         <div className='shows'>
//           {data.shows.map((s) => (
//             //<ShowCard show={s} key={s.imdbID}/>
//             <ShowCard {...s} key={s.imdbID}/>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

module.exports = Search;
