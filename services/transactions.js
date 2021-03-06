const transactionsModel = require('../models/transactions')

/**
 * Get a espcific transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description:"",amount: 0.0}}
 */
const getTransaction = async (pk_transaction) => {
    try {
        return await transactionsModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Get a espcific transaction from user
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description:"",amount: 0.0}}
 */
 const getTransactionUser = async (fk_user) => {
    try {
        return await transactionsModel.getTransactionUser(fk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Create a transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description:"",amount: 0.0}}
 */
 const createTransaction = async (pk_transaction,fk_user,description,amount) => {
    try {
        return transactionsModel.createTransaction(pk_transaction,fk_user,description,amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Update a transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description:"",amount: 0.0}}
 */
 const updateTransaction = async (pk_transaction,fk_user,description,amount) => {
    try {
        return transactionsModel.updateTransaction(pk_transaction,fk_user,description,amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    getTransaction,
    createTransaction,
    updateTransaction,
    getTransactionUser
}