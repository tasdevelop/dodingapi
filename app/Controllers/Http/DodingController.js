'use strict'
const Doding = use('App/Models/Doding')
class DodingController {
    async index({response}){
        const dodings = await Doding.all()
        return response.json(dodings)
    }
    async paginate({request,response}){
        try {
            let pagination = request.only(['page','limit'])
            const page = parseInt(pagination.page,10) || 1;
            const limit = parseInt(pagination.limit,10) || 10;
            const dodings =await Doding.query().from('dodings').paginate(page,limit)
            return response.json(dodings)            
        } catch (error) {
            throw error;
        }

    }
    async show({params,response}){
        try {
            const doding = await Doding.find(params.id)
            return response.json(doding)
        }catch(err){
            throw err
        }

    }
}

module.exports = DodingController
