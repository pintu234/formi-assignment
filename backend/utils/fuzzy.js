// utils/fuzzy.js
const Fuse = require('fuse.js');

// List of known location names extracted from property names.
// This list can be extended as needed.
const knownLocations = [
    'Udaipur',
    'Jaipur',
    'Jaisalmer',
    'Jodhpur',
    'Agra',
    'Delhi',
    'Rishikesh',
    'Varanasi',
    'Goa',
    'Koksar',
    'Daman',
    'Panarpani',
    'Pushkar',
    'Khajuraho',
    'Manali',
    'Bhimtal',
    'Srinagar',
    'Ranthambore',
    'Coimbatore',
    'Shoja'
];

// Fuse.js options for fuzzy matching
const fuseOptions = {
    includeScore: true,
    threshold: 0.4,  // Adjust threshold as needed
};
const fuse = new Fuse(knownLocations, fuseOptions);

/**
 * correctQuery uses fuzzy matching to find the best match
 * for the user input among known location names.
 */
function correctQuery(query) {
    // First, try to see if the query is already a good match.
    if (knownLocations.includes(query)) {
        return query;
    }

    // Perform fuzzy search
    const result = fuse.search(query);
    if (result.length > 0 && result[0].score < 0.4) {
        // Use the best match if score is acceptable
        return result[0].item;
    }

    // If no good match is found, return the original query.
    return query;
}

module.exports = { correctQuery };
