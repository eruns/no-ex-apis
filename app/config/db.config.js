module.exports = {
  HOST: "localhost",
  USER: "node1",
  PASSWORD: "parola",
  DB: "node_react_express",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
