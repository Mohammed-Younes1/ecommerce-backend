const express = require("express");
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const app = express();
const phones = require("./routes/phoneRouter");
const tv = require("./routes/tvRouter");

app.use(express.json());

app.use("/api/phones", phones);
app.use("/api/tv", tv);

app.get("/", (req, res) => {
  res.send("<h1>test</h1>");
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
const PORT = 2872;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT} . . . `);
});
