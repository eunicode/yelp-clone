import React from 'react';
import './BusinessList.css';

// Import `Business` component class
// `BusinessList` contains `Business`, ie composition
import Business from '../Business/Business'; // don't need the js file extension, Business.js

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => (
          <Business business={business} key={business.id} />
        ))}
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

--------------------------------------------------------------------
Inside render() definition, inside return() function call, 
add JS inside JSX tags through curly braces.
Use map() to iterate array and use data in it, 
and return an array of <Business/> components

<div className="BusinessList">
  { this.props.businesses.map( ) }
</div>

--------------------------------------------------------------------
We can do this: 
this.props.businesses.map(business => {
  return <Business business={business} />
})
Bc we have imported `Business` 


*/
