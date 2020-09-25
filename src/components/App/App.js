import React from 'react';

import './App.css'; // Import CSS file without variable name

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// Dummy business listing
const business = {
  imageSrc:
    'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};

// Array of objects
const businesses = [business, business, business, business, business, business];

// App component renders a SearchBar component and a BusinessList component
// class App extends React.Component {
//   searchYelp(term, location, sortBy) {
//     console.log(`Search Yelp with ${term}, ${location}, ${sortBy}`);
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Yelp Clone</h1>
//         <SearchBar searchYelp={this.searchYelp} />
//         <BusinessList businesses={businesses} />
//       </div>
//     );
//   }
// }

// ALTERNATIVE CONSTRUCTOR FUNCTION
function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
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

*/
