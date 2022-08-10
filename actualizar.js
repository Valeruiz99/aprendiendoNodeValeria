//Actualizar en la base de datos de mongodb
const MongoCli = require("mongodb").MongoClient;

const uri = "mongodb+srv://ValeriaBustamante:w3WhljMYIRa5jadU@clusteradsi2364481.1di43ez.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("POSValeriaBustamante");
    const vendedores = database.collection("Vendedores");

    const filter = { nombre: "Manuel" };

    const options = { upsert: true };

    const updateDoc = {
      $set: {
        nombre: `Manuela`
      },
    };

    const result = await vendedores.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
