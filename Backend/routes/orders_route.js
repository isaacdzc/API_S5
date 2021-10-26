const express = require("express");
const router = express.Router();

const order_controller = require("../controllers/orders_controller");

/**
 * @param {}
 * Obtiene todas las ordenes
 */
 router.get("/pedidos", (req, res) => {
    order_controller.getOrders().then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Pedidos consultados con éxito"
        });
        console.log("Pedidos consultados con éxito");
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * @param {id_order}
 * Obtiene una factura según su idproductos
 */
 router.get("/pedido/:id_order", (req, res) =>{
    let id_order = req.params.id_order;
    order_controller.getOrder(id_order).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Pedido consultados con éxito"
        });
        console.log("Pedido consultados con éxito");
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    });
});

/**
 * @param {pedido}
 * Crea un pedido según body
 */
 router.post("/pedido", (req, res) => {
    let data = req.body;
    order_controller.createOrder(data).then((response) =>{
        res.send({
            ok: true,
            info: data,
            message: "Pedido creado con éxito"
        });
        console.log("Pedido creado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});
 
module.exports = router;