var axios = require('axios');
var data = JSON.stringify({
    "collection": "Vendedores",
    "database": "POSValeriaBustamante",
    "dataSource": "ClusterADSI2364481",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bvgil/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'GLK21S2IJGv3p5vQgKTxgx2qeu6m5lucgUVOcpH0HLOJafSZvd2ZQPx9ih5yc7Wq',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
