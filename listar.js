const MongoCli = require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://ValeriaBustamante:w3WhljMYIRa5jadU@clusteradsi2364481.1di43ez.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("POSValeriaBustamante");
    const vendedores = database.collection("Vendedores");

    // query for movies that have a runtime less than 15 minutes
    const query = { };

    const propiedades = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { "nombre.rating": -1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, nombre: 1, cedula: 1 },
    };

    const cursor = vendedores.find(query,propiedades);

    // print a message if no documents were found
    if ((await vendedores.countDocuments()) === 0) {
      console.log("No documents found!");
    }

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
