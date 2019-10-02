'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Doding extends Model {
    static get table(){
        return 'dodings'
    }
    static get primaryKey(){
        return 'no'
    }
}

module.exports = Doding
