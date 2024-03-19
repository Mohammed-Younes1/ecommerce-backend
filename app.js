const express = require("express");
const app = express();
const phones = require("./routes/phoneRouter");
const tv = require("./routes/tvRouter");

app.use(express.json());

app.use("/api/phones", phones);
app.use("/api/tv", tv);

app.get("/", (req, res) => {
  res.send("<h1>test</h1>");
});

const PORT = 2872;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT} . . . `);
});
