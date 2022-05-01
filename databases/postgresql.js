const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                        insert into users values (123, 'Juan', true);
                        create table transactions(pk_transaction integer,fk_users integer, description text, amount float);
                        insert into transactions values(1,123,'Compra',10.99)`);


module.exports = {
    postgresql
}