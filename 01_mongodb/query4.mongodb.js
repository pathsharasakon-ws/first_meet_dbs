use("sample_mflix");
//How many movies mentioned American in their plot?
db.movies.find({plot: {$regex: "American", $options: "i"}}).count();

//How many movies does end plot (sentence) with the word street?
db.movies.find({plot: {$regex: "street.$", $options: "i"}}).count();

//What is an example of a movie mentioned American in their plot?
db.movies.findOne({plot: {$regex: "American", $options: "i"}});

//What is an example of a movie does end plot (sentence) with the word street?
db.movies.findOne({plot: {$regex: "street.$", $options: "i"}});