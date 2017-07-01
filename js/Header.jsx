const React = require('react')
const {Link} = require('react-router-dom')
const {func, bool, string} = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent(event) {
    this.props.handleSearchTermChange(event.target.value)
  },
  render(){
    let utilSpace;
    console.log(this.props)
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='Search'
                         value={this.props.searchTerm} onChange={this.handleSearchTermEvent}/>
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
        {utilSpace}
      </header>
    )
  }
})

module.exports = Header;
