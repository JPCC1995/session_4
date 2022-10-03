const Model = require('./auth.model')

class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = Users;