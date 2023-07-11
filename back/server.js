require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mysql = require('mysql2')
app.use(express.urlencoded({
  extended: true
}))
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
app.use(express.json())
app.get('/login', function(req, res) {
  const emailB = req.query.email;
  const contrasenaB = req.query.contrasena;
  const ccB = 123;
  console.log(emailB);
  console.log(contrasenaB);
  connection.query('SELECT 1 FROM usuario WHERE email = ? AND clave = ?', [emailB, contrasenaB], function (err, rows, fields) {
    if (err) {
      res.json({state:"error"});
    } else if (rows.length === 1){
      res.json({state:"valid"});
    } else {
      res.json({state:"invalid"});
    }
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});