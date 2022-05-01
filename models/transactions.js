const { postgresql } = require('../databases/postgresql')



/**
 * Create a transaction
* @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description:"",amount: 0.0}}
 */
 const createTransaction = (pk_transaction,fk_user,description,amount) => {
    try {
        let transaction = postgresql.public.one(`insert into transactions values ('${pk_transaction}', '${fk_user}', '${description}','${amount}') returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    createTransaction
}
