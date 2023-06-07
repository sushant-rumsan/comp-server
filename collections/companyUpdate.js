const Company = require('../models/companyModels')

const companyUpdate = async (req, res) => {
    const {id} = req.params
    try {
        await Company.findOneAndUpdate({_id: id}, 
            {...req.body})
            .then((err)=>{
                res.json(err)
            })
    } catch (error) {
        res.json(error)
    }
}

module.exports = {companyUpdate}