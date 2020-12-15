# Yelp Clone

## Description

This is a website that allows you to search for restaurants using the Yelp API.

## Demo

## Features

- Search for restaurants by search term and location
- Option to sort restaurant results by best match, highest rated, or most reviewed

## Tech Stack

- React

## APIs

- [Yelp API](https://www.yelp.com/fusion)

## Code Overview

App<br>
App is composed of `SearchBar` and `BusinessList` components. We instantiate them in render().
We define searchYelp() and bind it in the constructor. searchYelp() will request data from the Yelp API and store it in `App`'s state. We pass searchYelp() down to `SearchBar` because searchYelp() will be called when a submit button in `SearchBar` is clicked.
We pass down Yelp API data stored in `App`'s state to `BusinessList` via props.

Yelp<br>
We use fetch() to make an HTTP request, which returns a promise containing the response. We then do some data post-processing.

SearchBar<br/>
We use the `event` object in the onChange event handler to get the user input for search term and location. We then store the user input in `SearchBar`'s state.
We have unique onClick event handlers for each search option element, where the first parameter is predefined to be the search option, via bind(). Whenever a search option is clicked, the state will be updated with the selected search option.
When the search button is clicked, we call searchYelp() with arguments from state (term, location, sortBy). The searchYelp() function gets Yelp API data and updates `App`'s state with Yelp API data. The state of `App`, a parent component, gets updated because searchYelp() is defined in `App` and its `this` is bound to the `App` instance.

BusinessList<br/>
We receive Yelp API data, which is in the form of an array of objects, via props. In render(), we use map() to return an array of instantiated `Business` components. `{this.props.businesses.map( (business) => (<Business business={business} />) )}`
We pass Yelp API data to `Business` via props.

Business<br>
We build a business component with the Yelp API data.

## Lessons Learned

- Use whatwg-fetch npm package as a fetch() polyfill
- Use [CORS Anywhere](https://cors-anywhere.herokuapp.com/) API, a proxy that adds CORS headers to requests, to make requests with the proper CORS permissions and get responses.
- Use API key as a browser header to identify myself to Yelp API
- Promises returned from fetch() won't reject on HTTP response error status codes. So instead of try...catch(), use if condition and response.ok.
- The Response interface of the Fetch API (Response.ok), and the Body interface (Body.json(), Body.text())
- Data flow should be unidirectional. Data is passed down from parent to child via props.
- State should be managed in the top level component. If state data changes at the top, it'll cascade down the virtual DOM, updating components.
- Data can be "passed" up by changing the top level component's state. A child can tell its parent to change through events and callback functions. An event on a child component can trigger a callback function defined in the parent, and call `this.setState()` where `this` refers to the parent and updates parent's state.
- Use bind() to create a function definition with predefined values for `this` and other parameters. In this code, we've bound the current value of `this`, as well as the current value of `sortByOptionValue` as the first argument of the method call: `onClick={ this.handleSortByChange.bind(this, sortByOptionValue) }`
- Use map() to generate array of unique elements, and bind() to pass arguments to event handlers and create unique event handlers: `onClick={ this.handleSortByChange.bind(this, sortByOptionValue) }`
- In React, the `event` object is passed as the second (or last?) argument. With bind(), further arguments are automatically/implicitly forwarded: `onClick={this.handleSortByChange.bind( this, sortByOptionValue[, event] )}`
- We can use JSX outside of render(): renderSortByOptions() returns array of elements
  `arr.map((elm) => { return (<li attribute={elm}>{elm}</li>); })`
- We can render an array of elements: Inside render() `<ul>{this.renderSortByOptions()}</ul>`

## Unresolved Questions

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }
  ...
```

The value of `this` inside of App's searchYelp() method is explicitly bound to its App instance. Within searchYelp() there's a function definition, then()'s success callback function, that references `this`. A function call creates a new execution context with its own `this` binding, so how does `this` inside of then()'s success callback function equal the App instance instead of `undefined`/global object?

```
getSortByClass(sortByOption) {
  if (this.state.sortBy === sortByOption) {
    return 'active';
  } else {
    return '';
  }
}
```

getSortByClass() is not bound in the constructor, nor is it an arrow function. How is `this` the SearchBar instance?

## To Do

- Use React Context API (avoid prop drilling)
- Use React Hooks (functional programming)

## Setup

Move to the file path you want the project to be in. Download or clone source files.

Install dependencies.

`npm install`

Start the development server and run the app in development mode.

`npm start` or `yarn start`

Run tests on files changed since last commit.

`npm test` or `yarn test`

Build the app for production in the `build` folder.

`npm run build` or `yarn build`

## Attribution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project's starter files were from codeCademy.
