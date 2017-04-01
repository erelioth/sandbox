var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send(String('req keys='+Object.keys(req)));
})

app.listen(6262)
