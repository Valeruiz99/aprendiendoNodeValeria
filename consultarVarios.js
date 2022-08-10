//Aquí estamos trabajando sobre la base de datos de mongodb, consultar varios

const MongoCli = require("mongodb").MongoClient;

const uri = "mongodb+srv://ValeriaBustamante:w3WhljMYIRa5jadU@clusteradsi2364481.1di43ez.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("POSValeriaBustamante");
    const vendedores = database.collection("Vendedores");

    const query = { "cedula": 123456789 };

    const vendedor = {
      sort: { "cedula.rating": -1 },
      projection: { _id: 0, nombre: 1, cedula: 1 },
    };

    const cliente = await vendedores.findOne(query, vendedor);

    console.log(cliente);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
