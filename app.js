const express = require('express');
const layout = require('./views/layout');

const app = express();

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use('/wiki', wikiRouter);


const { db } = require('./models');
const models = require('./models');

app.get('/', (req, res) => {
  res.send(layout(''))
});

db.authenticate().then(() => {
  console.log('connected to the database');
})


const connect = async () => {
  await models.User.sync()
  await models.Page.sync()
  console.log("DB is sync'd")
}


const PORT = 3000;

app.listen(PORT, () => {
  console.log (`App listening in port ${PORT}`)
});

connect();
