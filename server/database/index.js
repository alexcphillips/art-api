const path = require("path");
const { clearConsole, isDev } = require("../utilities");

if (isDev) {
  clearConsole();
  envPath = "../../.env.dev";
} else {
  envPath = "../../.env";
}

require("dotenv").config({ path: path.join(__dirname, envPath) });

const MongoClient = require("mongodb").MongoClient;
exports.db = null;

exports.mongoConnect = async (options) => {
  try {
    const defaultOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    console.log(`connecting mongodb to ${process.env.MONGO_URI}`);

    const client = await MongoClient.connect(
      process.env.MONGO_URI,
      options || defaultOptions
    );

    exports.db = client.db("financial-reporting");
    console.log("db client created");

    return exports.db;
  } catch (err) {
    throw err;
  }
};
