use("sample_mflix");
db.movies.find({
    year: {$gte: 1950, $lte: 1970},
    countries: {$in: ["USA"]}
})

db.movies.find({
    genres: {$in: ["Drama", "History"]},
    released: {$gte: ISODate("1971-01-01")}
}).count();

db.movies.find({cast: "Roy L. McCardell"}).count();

db.movies.find({director: "Hal Roach"}).count();

