require('dotenv').config();

const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

/**
 * @param {PORT}
 * Levantamiento del servidor
 */
 app.listen(process.env.PORT, () => {
    console.log(`Escuchando API en http://localhost:${process.env.PORT}`);
});

//Middleware
app.get('/', (req, res) => res.send(
  {message: "Don't burn the witch",
  status: "Melo"}));

/**
 * @param {rutas}
 * Rutas de conexión 
 */
 const products_route = require("../routes/products_route");
 const billing_route = require("../routes/billing_route");
 const orders_route = require("../routes/orders_route");
 
app.use(
  products_route,
  billing_route,
  orders_route,
);

