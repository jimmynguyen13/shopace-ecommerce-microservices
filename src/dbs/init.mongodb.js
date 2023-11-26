const { default: mongoose } = require("mongoose");
const {
  db: { host, port, name },
} = require("../configs/config.mongodb");

const connectionString = `mongodb://${host}:${port}/${name}`;
// console.log(connectionString);
// Create class Database to use STRATEGY PATTERN for others DB engines in the future)

class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type = "mongodb") {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectionString, {
        maxPoolSize: 100,
      })
      .then((_) => console.log(`Connected to MongoDB successfully`))
      .catch((err) => console.log(`Error connect to MongoDB ${err}`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
