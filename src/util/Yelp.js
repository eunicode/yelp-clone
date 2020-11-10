// Yelp API key
const apiKey =
  '7eKm3D5P9zDeu7K2WCAFkOLRIudwI-WGk8LdkkHPT0DJtzIsJoqHAghkXiiSrp2N26uTn97W0Uigh52gEaFdRhiVwras3C9Ix7QH0ATVZPt2uh68HmP91K1NEPapX3Yx';

// Yelp module - Store functionality needed to interact w/ Yelp API
export const Yelp = {
  // Method shorthand syntax
  search(term, location, sortBy) {
    // Return a promise
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.hasOwnProperty(businesses)) {
          console.log('hi', jsonResponse);
          return jsonResponse.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address:
              business.location.address1 + business.location.address2
                ? business.location.address2
                : '' + business.location.address3
                ? business.location.address3
                : '',
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.join(', '),
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};
