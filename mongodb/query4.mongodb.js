use("sample_mflix");
db.movies.find({plot: {$regex: "American", $options: "i"}}).count();
db.movies.find({plot: {$regex: "street.$", $options: "i"}}).count();
db.movies.findOne({plot: {$regex: "American", $options: "i"}});
db.movies.findOne({plot: {$regex: "street.$", $options: "i"}});