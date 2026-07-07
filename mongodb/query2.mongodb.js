use("sample_mflix");
db.movies.findOne({ type: "movie", rated: "TV-G" });
db.movies.find({ rated: "TV-G" }).count();