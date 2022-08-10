//Insertar uno desde el consumo de la api
var axios = require('axios');
var data = JSON.stringify({//En este caso estoy escribiendo un json y lo transforma en una cadena y lo guarda en la variable "data"
    "collection": "Vendedores",
    "database": "POSValeriaBustamante",
    "dataSource": "ClusterADSI2364481",
    "documents":[{
        "cedula": 111111,
        "nombre":"Hermesd",
        "edad": 45
    },{
        "cedula": 258258,
        "nombre":"Lalo",
        "edad": 70
    },
    {
        "cedula": 333333,
        "nombre":"Carmelo",
        "edad": 39
    }]
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bvgil/endpoint/data/v1/action/insertMany',//Enpoint de la api
    headers: {
      'Content-Type': 'application/json',//Tipo de información que quiero recibir
      'Access-Control-Request-Headers': '*',//Indica qué tipo de permisos tengo
      'api-key': 'GLK21S2IJGv3p5vQgKTxgx2qeu6m5lucgUVOcpH0HLOJafSZvd2ZQPx9ih5yc7Wq',
    },
    data: data//Variable "data", que contiene la información de "data" que contiene la información de la base de datos
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
