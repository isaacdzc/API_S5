const connection = require("../services/database");

/**
 * @param
 * Obtiene todos los pedidos
 */
async function getOrders(){
    let _connection = await new connection();
    let script = `SELECT * FROM public.orders;`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {id_orders}
 * Obtiene un producto según id_orders
 */
 async function getOrder(id_orders){
    let _connection = await new connection();
    let script = `SELECT * FROM public.orders 
        WHERE id_orders = '${id_orders}';`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {order}
 * Crea un pedido con parametros ingresados en body
 */
 async function createOrder(order){
    let _connection = await new connection();
    let script = `INSERT INTO public.orders(
        id_orders, id_product, id_bill, quantity, id_customer, payment)
        VALUES (
            '${order.id_orders}', 
            '${order.id_product}', 
            '${order.id_bill}', 
            '${order.quantity}', 
            '${order.id_customer}',
            '${order.payment}');`
    let response = await _connection.execute(script);
    return response;
  };

module.exports = {
    getOrders,
    getOrder,
    createOrder,
};