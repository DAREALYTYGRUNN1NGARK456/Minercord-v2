const express = require('express');

const app = express();
// this is required for the 24/7 hosting
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log('server started');
});

