import React from 'react';

import './App.css'; // Import CSS file without variable name

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import { Yelp } from '../../util/Yelp';

// Dummy business listing
// const business = {
//   imageSrc:
//     'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90,
// };

// Array of objects
// const businesses = [business, business, business, business, business, business];

// App component renders a SearchBar component and a BusinessList component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  // searchYelp() is defined in <App />, but it's called in <SearchBar />,
  // bc we get arguments (term, location, sortBy) from <SearchBar />
  searchYelp(term, location, sortBy) {
    // Call search() defined in Yelp.js, which returns array of business objects
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
      // `this` is <App/>, even though we call searchYelp() in <SearchBar/>. This is bc we bound `this` to <App/>.
      // This is crucial! This is how we can move data up from child to the parent.
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Yelp Clone</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;

/* =================================================================  
                          NOTES
================================================================= */

/*
ALTERNATIVE WAY TO EXPORT COMPONENT

export default class App extends Component {
  // Code
}

--------------------------------------------------------------------
FUNCTION COMPONENT
https://reactjs.org/docs/components-and-props.html

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

--------------------------------------------------------------------
FUNCTIONAL VS CLASS COMPONENT

functional
- stateless
- no render()
- no lifecycle method
- React Hooks: useEffect(), useState()

--------------------------------------------------------------------
Have business data in App.js
Have array of business data objects. Pass that array down to BusinessList
Have BusinessList pass down business data to Business. 
This is prop drilling.

--------------------------------------------------------------------
<SearchBar searchYelp={this.searchYelp} /> 
We have searchYelp() in two places: App.prototype or myapp.__proto__, and myapp.searchYelp. 
We use `this.searchYelp`, bc this is the searchYelp() where `this` is bound to the app instance.

--------------------------------------------------------------------
TO DO

Use async/await
Use hooks (functional programming)
Context API
*/
