const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// *** Start File Upload ***
global.__basedir = __dirname;
const initRoutes = require("./app/routes");
// *** End File Upload ***
q
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

initRoutes(app); // E.L. - adding img upload

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// app.get("/user-reg", (res) => {
//   res.body("<form method='post'><input name='user'></form>")
// })
app.get('/user-reg', function (req, res) {
  res.send('<html><body>' +
      '<form action="/api/auth/signup" method=\'post\'><hr>' +
      'User name: <input name=\'username\'></br>' +
      'Email: <input name=\'email\'><br>' +
      'Role: <select name="roles" id="roles" multiple>\n' +
      '  <option value="user">User</option>\n' +
      '  <option value="moderator">Moderator</option>\n' +
      '  <option value="admin">Admin</option>\n' +
      '</select><br>' +
      'Password: <input name=\'password\'><hr>' +
      '<input type="submit" value="Register"/></form>' +
      '</body></html>');
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}