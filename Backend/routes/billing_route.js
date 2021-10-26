const express = require("express");
const router = express.Router();

const billing_controller = require("../controllers/billing_controller");

/**
 * @param {}
 * Obtiene todas las factura
 */
 router.get("/facturas", (req, res) => {
    billing_controller.getBills().then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Facturas consultadas con éxito"
        });
        console.log("Facturas consultadas con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * @param {id_bill}
 * Obtiene una factura según su id_bill
 */
 router.get("/factura/:id_bill", (req, res) =>{
    let id_bill = req.params.id_bill;
    billing_controller.getBill(id_bill).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "factura consultadas con éxito"
        });
        console.log("factura consultadas con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    });
});

/**
 * @param {bill}
 * Crea una factura según body
 */
 router.post("/factura", (req, res) => {
    let data = req.body;
    billing_controller.createBill(data).then(() =>{
        res.send({
            ok: true,
            info: data,
            message: "Factura creada con éxito"
        });
        console.log("Factura creada con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

 /**
 * @param {id_bill}
 * Elimina una factura según id_bill
 */
  router.delete("/factura/:id_bill", (req, res) =>{
    let id_bill = req.params.id_bill;
    billing_controller.deleteBill(id_bill).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Factura eliminada con éxito"
        });
        console.log("Factura eliminada con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    
    });
})

module.exports = router;