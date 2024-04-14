require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
// const swaggerUI = require('swagger-ui-express');
// const swaggerSpec = require('./swagger');
const app = express();
const phones = require("./routes/phoneRouter");
const tv = require("./routes/tvRouter");
const auth=require("./routes/authRoutes")
const cart = require("./routes/cartRoutes");
const shipment=require("./routes/shipmentRoutes");
const verifyToken = require('./middleware/authMiddleware');
const isAuthenticated = require('./middleware/userMiddleware');


// const protectedRoute = require('./routes/protectedRoute');


// Connect to MongoDB
const dbURI = 'mongodb+srv://mansaf:mansaf@cluster0.rt9vy29.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });


app.use(express.json());
//routes
app.use('/authRoutes',auth);
app.use("/api/phones", phones);
app.use("/api/tv", tv);
app.use("/api/cart",isAuthenticated, cart);
app.use("/api/shipment",isAuthenticated, shipment);
app.use("/user",verifyToken,auth)

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
