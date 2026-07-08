use("sample_mflix");

//Find all movies in the "movies" collection released between 1950 and 1970 (inclusive) 
// that are documented as being shown in countries located in the USA
db.movies.find({
    year: {$gte: 1950, $lte: 1970},
    countries: {$in: ["USA"]}
})

//What is the number of movies in the "movies" collection 
// with genres "Drama" and "History" released after the year 1970?
db.movies.find({
    genres: {$in: ["Drama", "History"]},
    released: {$gte: ISODate("1971-01-01")}
}).count();

//In how many films is Roy L. McCardell credited as an actor?
db.movies.find({cast: "Roy L. McCardell"}).count();

//How many movies did Hal Roach directed?
db.movies.find({directors: "Hal Roach"}).count();

//What is the movie with the earliest release year directed by Hal Roach?
db.movies.findOne({directors: {$in: ["Hal Roach"]}});

//How many awards did Hal Roach’s movies win?
db.movies.find({
    directors: {$in: ["Hal Roach"]},
    awards: {$exists: true, $ne: []}
}).count();


db.movies.find({
    directors: {$in: ["Hal Roach"]}},
    {title: 1,
    "awards.wins": 1,
    _id: 0}
);
