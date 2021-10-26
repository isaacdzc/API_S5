const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/products_controller");

/**
 * @param {}
 * Obtiene todos los productos
 */
 router.get("/productos", (req, res) => {
    product_controller.getProducts().then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Productos consultados con éxito"
        });
        console.log("Productos consultados con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * @param {id_product}
 * Obtiene una factura según su idproductos
 */
 router.get("/producto/:id_product", (req, res) =>{
    let id_product = req.params.id_product;
    product_controller.getProduct(id_product).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Productos consultados con éxito"
        });
        console.log("Productos consultados con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    });
});

/**
 * @param {producto}
 * Crea un producto según body
 */
 router.post("/producto", (req, res) => {
    let data = req.body;
    product_controller.createProduct(data).then((response) =>{
        res.send({
            ok: true,
            info: data,
            message: "Producto creado con éxito"
        });
        console.log("Producto creado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * @param {producto}
 * Actualiza un producto según body
 */
 router.put("/producto/:id_product", (req, res) =>{
    let id_product = req.params.id_product;
    let data = req.body;
    product_controller.updateProduct(id_product, data).then((response) =>{
        res.send({
            ok: true,
            info: data,
            message: "Producto modificado con éxito"
        });
        console.log("Producto modificado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
 })

/**
 * @param {id_product}
 * Elimina un producto según idproducto
 */
 router.delete("/producto/:id_product", (req, res) =>{
    let id_product = req.params.id_product;
    product_controller.deleteProduct(id_product).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Productos eliminado con éxito"
        });
        console.log("Productos eliminado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    
    });
})
 
module.exports = router;