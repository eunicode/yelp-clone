import React from 'react';
import './SearchBar.css'; // do we need to store this in a variable?

// Yelp API - business search endpoint
// sort_by parameter: sort results by several options
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
  // Create array of sort options
  renderSortByOptions() {
    // returns array of object keys
    return (
      Object.keys(sortByOptions)
        // returns array of <li>'s
        .map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li key={sortByOptionValue}>{sortByOption}</li>;
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
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
