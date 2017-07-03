const React = require('react')
const {object} = React.PropTypes
const Header = require('./Header')
const {connector} = require('./Store')

// class Details extends React.Component {
//   render() {
//       return  (
//         <div className='container'>
//           <pre>
//             <code>
//               {JSON.stringify(this.props, null, 4)}
//             </code>
//           </pre>
//         </div>
//       );
//   }
// }


//awesome way to debug state and get ids in our case from url
// const Details = (props) => (
//   <div className='container'>
//           <pre>
//             <code>
//               {JSON.stringify(props, null, 4)}
//             </code>
//           </pre>
//   </div>
// )

//Data Tunneling
// const Details = (props) => (
//   <div className='container'>
//       <pre>
//         <code>
//           {JSON.stringify(props, null, 4)}
//         </code>
//       </pre>
//   </div>
// )

const Details = React.createClass ({
  propTypes: {
    route: object
  },
  assignShow(id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  },
  render() {
    // const params = this.props.show || {}
    // const {title, description, year, poster, trailer} = params
    //redux gets this
    //const {title, description, year, poster, trailer} = this.props.shows[this.props.params.id]
    console.log(this.props)
    const {title, description, year, poster, trailer} = this.assignShow(this.props.match.params.id)

    return (<div className='container'>
      <Header/>
      <div className='video-info'>
        <h1 className='video-title'>{title}</h1>
        <h2 className='video-title'>({year})</h2>
        <img className='video-poster' src={`public/img/posters/${poster}`}/>
        <p className='video-description'>{description}</p>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
                  frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    </div>)
  }
})


module.exports = connector(Details);
