import api from './api.js';

// Yelp API key
const apiKey = api.apiKey;

// Yelp module - Store functionality needed to interact w/ Yelp API
export const Yelp = {
  // Method shorthand syntax
  search(term, location, sortBy) {
    // Return a promise
    return fetch(
      // resource
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      // `init` object
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    ) // fetch() returns a Response object
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Get JSON value from `response` body. Parses the body text as JSON
      })
      .then((jsonResponse) => {
        // Check if the JSON response has a `businesses` property to avoid trying to render businesses with no/wrong data
        if (jsonResponse.businesses) {
          console.log('hi', jsonResponse);

          // Return transformed array of business objects
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address:
              business.location.address1 +
              (business.location.address2
                ? ` ${business.location.address2}`
                : '') +
              (business.location.address3
                ? `${business.location.address3}`
                : ''),
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

// NOTES

/*
Authentication
https://www.yelp.com/developers/documentation/v3/authentication

Yelp Fusion API uses private API Keys to authenticate requests. 
To authenticate the call to an endpoint, there are only 2 steps:
1. Create an app to obtain your private API Key.
2. Authenticate API calls with the API Key.

Authenticate API calls with the API Key
To authenticate API calls with the API Key, set the `Authorization` HTTP header value as `Bearer API_KEY`.
request header 
"Authorization: Bearer <YOUR API KEY>"

Where did my client secret go?
In an effort to simplify authentication, the API no longer uses OAuth 2.0 to authenticate requests to the API, and moved over to only API Keys.

--------------------------------------------------------------------------------
WindowOrWorkerGlobalScope.fetch()
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

const fetchResponsePromise = fetch(resource [, init])

init Optional
An object containing any custom settings that you want to apply to the request. 
The possible options are:

headers
Any headers you want to add to your request, contained within a Headers object, 
or an object literal with ByteString values. Note that some names are forbidden.

Fetch with `init` object

```
const myImage = document.querySelector('img');

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg');
fetch(myRequest, myInit).then(function(response) {
  // ... 
});
```

You can also use an object literal as headers in `init`.
```
const myInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'image/jpeg'  <--- `headers` object literal
  },
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg', myInit);
```
*/
