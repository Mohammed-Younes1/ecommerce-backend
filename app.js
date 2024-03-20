const express = require("express");
// const swaggerUI = require('swagger-ui-express');
// const swaggerSpec = require('./swagger');
const app = express();
const phones = require("./routes/phoneRouter");
const tv = require("./routes/tvRouter");
const auth=require("./routes/authRoutes")
// const protectedRoute = require('./routes/protectedRoute');

app.use(express.json());
//routes
app.use('/authRoutes',auth);
app.use("/api/phones", phones);
app.use("/api/tv", tv);

// for later to make sure the routes are safe when login
// app.use('/protected', protectedRoute);


app.get("/", (req, res) => {
  res.send("<h1>test</h1>");
});


// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
const PORT = 2872;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT} . . . `);
});
