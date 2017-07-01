const React = require('react')
const {object} = React.PropTypes

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
    params: object
  },
  render() {
    return (<div className='container'>
      <header className='header'>

      </header>
    </div>)
  }
})


module.exports = Details;
