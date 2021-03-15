import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         term: ''
      }
    }
    
    searchTerm = (event) => {
        event.preventDefault()
        this.props.onSearchTerm(this.state.term)
    }

    render() {
        return (
        <div>
            <form>
                <input onChange={e => this.setState({ term: e.target.value }, () => console.log(this.state.term))} type="text" placeholder="search the video" name="term" />
                <button onClick={this.searchTerm}>Search</button>
            </form>
        </div>
        );
    }
}

export default SearchBar;
