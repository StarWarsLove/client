import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  handleSearch (e) {
    this.setState({ username: e.target.value })
  }

  handleGoClick () {
    if (!this.props.github.isFetchingUser) {
      this.props.actions.fetchUser(this.state)
    }
  }

  render () {
    return (
      <div className='searchbar-container'>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder='rechercher votre âme soeur'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
          <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Rechercher
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar

