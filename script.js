const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const tablename = 'vidusers';

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

var con = mysql.createConnection({
  host: "localhost",
  user: "martina",
  password: "Inferno97",
  database: "vidiebed"
});

app.post('/api', (request, response) => {
  const saltRounds = 6;
  let hashedPass;
  const data = request.body;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(data['password'], salt, function(err, hash) {
      hashedPass = hash;
      sql = 'INSERT INTO ' + tablename + "(username, password, fullname, vidregnumber, registrationaccepted, eligfordiscount, discelig_startdate, discelig_enddate, email) VALUES('" + data['userName'] + "','" + hashedPass + "','" + data['fullName'] + "','" + data['regNumber'] + "','N','N',NULL,NULL,'" + data['email'] +"');";
      con.query(sql, function (err, result) {
        if (err){
          console.log(err);
        }
        console.log(result);
      });
     });
  });

  response.json(data);
  console.log(data);
});
