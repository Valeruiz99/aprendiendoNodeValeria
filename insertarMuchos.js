//Insertar muchos en la base de datos de mongodb
const MongoCli = require("mongodb").MongoClient;

const uri = "mongodb+srv://ValeriaBustamante:w3WhljMYIRa5jadU@clusteradsi2364481.1di43ez.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("POSValeriaBustamante");
    const vendedores = database.collection("Vendedores");

    // create an array of documents to insert
    const docs = [
      { cedula: 111111111, nombre: "Maria", edad: 25 },
      { cedula: 258963254, nombre: "Juan", edad: 20 },
      { cedula: 784512369, nombre: "Ana", edad: 39 }
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await vendedores.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
