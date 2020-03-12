const express = require('express')
const layout = require('./views/layout')

app.get('/', (req, res)) {
  res.send(layout(''))
}


const PORT = 3000;

app.listen(PORT, () => {
  console.log (`App listening in port ${PORT}`)
});
