import React from 'react';
import './SearchBar.css'; // do we need to store this in a variable?

// Yelp API - business search endpoint
// sort_by parameter: sort results by several options

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this); //

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  // How come getSortByClass() doesn't need to be bound?
  getSortByClass(sortByOption) {
    // how is `this` set to SearchBar instance?
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    // `event` object is automatically passed to event handlers
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  // onclick handler for 'search' button
  handleSearch(event) {
    // Call searchYelp() with state as arguments
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );

    // Prevent the default action of clicking a link
    event.preventDefault();
  }

  // Create array of list items that are sorting options
  renderSortByOptions() {
    // returns array of object keys
    return (
      // Object.keys(obj) returns an array of keys ['Best Match', 'Highest Rated', 'Most Reviewed']
      Object.keys(this.sortByOptions)
        // map() returns array of <li>'s
        .map((sortByOption) => {
          let sortByOptionValue = this.sortByOptions[sortByOption]; // Use key to get value from object, eg {...}['Best Match'] = 'best_match'
          return (
            <li
              // State holds active/clicked option, check if option matches state
              className={this.getSortByClass(sortByOptionValue)}
              key={sortByOptionValue}
              // bind() returns a new fxn definition where `this` and `sortByOptionValue` variable values are defined.
              // We use bind() to pass second parameter to event handler.
              // A different callback is created every time SearchBar renders.
              onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
            >
              {sortByOption} {/* Best Match */}
            </li>
          );
        })
    );
  }

  render() {
    // Build structure of the <SearchBar /> component
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          {/* array of <li>'s */}
          <ul>{this.renderSortByOptions()}</ul>
        </div>

        <div className="SearchBar-fields">
          <input
            onChange={this.handleTermChange}
            placeholder="Search Businesses"
          />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>

        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;

/* =================================================================  
                          NOTES
================================================================= */

/*
YELP API
https://www.yelp.com/developers/documentation/v3/business_search

--------------------------------------------------------------------
CLASS METHODS

renderSortByOptions()
It can return JSX. 
We can use map() with JSX

render()
We can call outside functions that return JSX
WRONG
<ul>renderSortByOptions();</ul>
CORRECT
<ul>{this.renderSortByOptions()}</ul>
We need JS markers, we need `this`

--------------------------------------------------------------------
whitespace gets ignored
Object.keys(my_obj) .map(...)

--------------------------------------------------------------------
REMINDERS

JSX = className, not class
*/
