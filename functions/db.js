// db.js
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://cnell:0nYzjTCvuLi23pkU@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority";

var client;

const getClient = async () => {
	if (client && client.isConnected()) {
		console.log("DB CLIENT ALREADY CONNECTED");
	} else
		try {
			client = await MongoClient.connect(url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log("DB CLIENT RECONNECTED");
		} catch (e) {
			throw e;
		}

	return client;
};

module.exports = getClient;