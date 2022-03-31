const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors('*'))

app.post('/', function (req, res) {
  console.log(req.body)
  res.sendStatus(200)
})

app.listen(3000)