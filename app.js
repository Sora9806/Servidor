
var express = require('express');
var app = express();


//app.get('/', function (req, res) {
// res.send('Hello World!');
//});

let producto = {
    tipoProducto : null,
    precio : null,
    cantidad :null,
};
app.post("/producto/agregar", function (req,res){
    producto.push({
        tipoProducto : "living"
    })
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})