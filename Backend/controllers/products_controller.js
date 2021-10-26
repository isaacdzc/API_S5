const connection = require("../services/database");

/**
 * @param
 * Obtiene todos los productos
 */
async function getProducts(){
    let _connection = await new connection();
    let script = `SELECT * FROM public.products;`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {id_product}
 * Obtiene un producto según id_product
 */
 async function getProduct(id_product){
    let _connection = await new connection();
    let script = `SELECT * FROM public.products 
        WHERE id_product = '${id_product}';`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {product}
 * Crea un producto con parametros ingresados en body
 */
 async function createProduct(product){
    let _connection = await new connection();
    let script = `INSERT INTO public.products(
        id_product, name, unit_price, taxes, stock, description)
        VALUES (
            '${product.id_product}', 
            '${product.name}', 
            '${product.unit_price}', 
            '${product.taxes}', 
            '${product.stock}',
            '${product.description}');`
    let response = await _connection.execute(script);
    return response;
  };

/**
 * @param {producto}
 * Crea un producto con parametros ingresados en body
 */
 async function updateProduct(id_product, data){
    let _connection = await new connection();
    let script = `UPDATE public.products
        SET id_product='${data.id_product}', 
            name='${data.nombre}', 
            unit_price='${data.precio}', 
            taxes='${data.tamaño}', 
            stock='${data.existencias}', 
            description='${data.categoria}'
            WHERE id_product = '${id_product}';`
    let response = await _connection.execute(script);
    return response;
  };
  
/**
 * @param {id_product}
 * Elimina un producto según su id_product
 */
async function deleteProduct(id_product){
    let _connection = await new connection();
    let script = `DELETE FROM public.products
    WHERE id_product = '${id_product}';`
    let response = await _connection.execute(script);
    return response;
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};