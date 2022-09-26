const Model = require('./auth')

class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        return {
          children: {
            relation: Model.HasManyRelation,
            modelClass: Person,
            join: {
              from: 'persons.id',
              to: 'persons.parentId'
            }
          }
        };
    }
}

module.exports = Users;