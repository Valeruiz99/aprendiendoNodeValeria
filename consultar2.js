const MongoCli = require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://ValeriaBustamante:w3WhljMYIRa5jadU@clusteradsi2364481.1di43ez.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("POSValeriaBustamante");
    const vendedores = database.collection("Vendedores");

    // Query for a movie that has the title 'The Room'
    const query = { "cedula": 123456789 };

    const vendedor = {
      // sort matched documents in descending order by rating
      sort: { "cedula.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, nombre: 1, cedula: 1 },
    };

    const cliente = await vendedores.findOne(query, vendedor);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(cliente);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
