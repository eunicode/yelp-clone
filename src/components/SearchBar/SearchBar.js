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

    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  getSortByClass(sortByOption) {
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
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );

    event.preventDefault();
  }

  // Create array of sort options
  renderSortByOptions() {
    // returns array of object keys
    return (
      Object.keys(this.sortByOptions)
        // returns array of <li>'s
        .map((sortByOption) => {
          let sortByOptionValue = this.sortByOptions[sortByOption];
          return (
            <li
              className={this.getSortByClass(sortByOptionValue)}
              key={sortByOptionValue}
              onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
            >
              {sortByOption}
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
