const users = require('../../services/users')

describe('users main functions', () => {
    // createUser function test
    test('createUser with {pk_user: 5, name: "Carlos", status:false}', async () => {
        let user = await users.createUser(5, "Carlos",false);
        expect(user.pk_user).toBe(5);
    });

    // getUser function test
    test('getUser with {pk_user: 123}', async () => {
        let user = await users.getUser(123)
        expect(user.pk_user).toBe(123);
    });

    // getUser function test
    test('updateUser with {pk_user: 5, name: "Jose", status:true}', async () => {
        let user = await users.updateUser(5,"Jose",true)
        expect(user.pk_user).toBe(5);
    });

    test('deleteUser with {pk_user: 5}', async () => {
        let user = await users.deleteUser(5)
        expect(user.pk_user).toBe(5);
    });

})