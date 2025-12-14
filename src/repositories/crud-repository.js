const {Logger} = require('../config')

// reference = https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data) {
        try{
            const response = await this.model.create(data) // Here .create is act as a Insert sql query for Inserting values
            return response; 
        } catch(error){
            Logger.error('something went wrong in the Crud Repo : create');
            throw error;
        }
    }

    async destroy(data) {
        try{
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response; 
        } catch(error){
            Logger.error('something went wrong in the Crud Repo : destroy');
            throw error;
        }
    }

    async get(data) {
        try{
            const response = await this.model.findByPK(data) // it find by primary key
            return response; 
        } catch(error){
            Logger.error('something went wrong in the Crud Repo : get');
            throw error;
        }
    }

    async getAll() {
        try{
            const response = await this.model.findAll()
            return response; 
        } catch(error){
            Logger.error('something went wrong in the Crud Repo : getAll');
            throw error;
        }
    }

    async update(id,data) { // data -> {col: value, ...}
        try{
            const response = await this.model.update(data, {
                where: {
                    id : id
                }
            })
            return response; 
        } catch(error){
            Logger.error('something went wrong in the Crud Repo : update');
            throw error;
        }
    }
}

module.exports = CrudRepository;