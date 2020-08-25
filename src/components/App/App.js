import React from 'react';

// import logo from '../../logo.svg';
import './App.css'; // Import CSS file without variable name

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// App component renders a SearchBar component and a BusinessList component
function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>ravenous</h1>
//         <SearchBar />
//         <BusinessList />
//       </div>
//     );
//   }
// }

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

*/
