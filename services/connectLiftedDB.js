const mongoose = require("mongoose");
const connectLiftedDB = async () => {
	try {
		await mongoose.connect(process.env.mongoURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
}

module.exports = connectLiftedDB;
