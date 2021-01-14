const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


const data  = fs.readFileSync('./database.json');
const conf  = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
  host:conf.host,
  user:conf.user,
  password:conf.password,
  port:conf.port,
  database:conf.database
});

connection.connect(err=>{
  console.log(err);
});

app.get('/api/customers', (req, res) => {
  connection.query('select * from customer',(err,results)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(results);
      console.log(results);
    }
  });
});

app.listen(4000, () => {
  console.log('server is loading');
}); 