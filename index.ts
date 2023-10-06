import connect from "./mongodb/connect";
import AtoZ from "./libs/AtoZ";
import extractData from "./libs/extractData";

async function main() {
  try {
    const client = await connect();
    if (client) {
      const db = client.db("akc");
      const breedsCollection = db.collection("breeds");

      AtoZ(async (e) => {
        try {
          const n = breedsCollection.find({
            "settings.current_breed": { $regex: new RegExp(`^${e}`, "i") },
          });
          await n.forEach((document) => {
            const data = extractData(document);
            console.log(data);
          });
        } catch (error) {
          console.log(error);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}

main();
