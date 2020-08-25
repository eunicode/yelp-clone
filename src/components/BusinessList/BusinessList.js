import React from 'react';
import './BusinessList.css';

// Import `Business` component class
// `BusinessList` contains `Business`, ie composition
import Business from '../Business/Business'; // don't need the js file extension, Business.js

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

export default BusinessList;

/* =================================================================  
                          NOTES
================================================================= */

/*
CLASSES
https://reactjs.org/docs/react-component.html

React lets you define components as classes or functions
React component class

In React components, code reuse is primarily achieved through composition rather than inheritance. [Different from Java]

--------------------------------------------------------------------
QUESTIONS

We can have a component inside of a class' render function.


*/
