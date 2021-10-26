const connection = require("../services/database");

/**
 * @param
 * Obtiene todas las facturas
 */
 async function getBills(){
    let _connection = await new connection();
    let script = `SELECT * FROM public.bills;`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {id_bill}
 * Obtiene una factura según id_bill
 */
 async function getBill(id_bill){
    let _connection = await new connection();
    let script = `SELECT * FROM public.bills 
        WHERE id_bill = '${id_bill}';`
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {bill}
 * Crea una factura con parametros ingresados en body
 */
 async function createBill(bill){
    let _connection = await new connection();
    let script = `INSERT INTO public.bills(
        id_bill, date, id_company)
        VALUES (
            '${bill.id_bill}', 
            current_date,
            '${bill.id_company}');`
    let response = await _connection.execute(script);
    return response;
};

/**
 * @param {id_bill}
 * Elimina una factura segun su id_bill
 */
async function deleteBill(id_bill){
    let _connection = await new connection();
    let script = `DELETE FROM public.bills
    WHERE id_bill = '${id_bill}';`
    let response = await _connection.execute(script);
    return response;
};


module.exports = {
    getBills,
    getBill,
    createBill,
    deleteBill,
};