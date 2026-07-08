use("sample_mflix");
//How many theaters does AL state has?
db.theaters.find({"location.address.state": "AL"}).count();

//How many theaters are in LA Quinta city?
db.theaters.find({"location.address.city": "LA Quinta"}).count();

//What is an example of a theater in AL state?
db.theaters.findOne({"location.address.state": "AL"});

//What is an example of a theater in LA Quinta?
db.theaters.findOne({"location.address.city": "LA Quinta"});