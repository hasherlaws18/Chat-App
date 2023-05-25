// Using this file to write sandbox queries.  Not intended to be used in a functional way in the final application.

// Define a query that gets a single genre by its id and includes the comments associated with that genre.
query genreFeed($_id: ID!) {
    Genre(_id: $_id) {
        comments
    }
}