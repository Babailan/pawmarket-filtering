import { MongoClient } from "mongodb";
const mongo_uri_connection =
  "mongodb+srv://ict_1:ict_1@cluster0.dgb4wek.mongodb.net/";

export default async function connect() {
  try {
    const init = new MongoClient(mongo_uri_connection);
    const client = await init.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
}
