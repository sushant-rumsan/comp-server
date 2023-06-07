const Company = require('../models/companyModels')

const companyDelete = async (req, res) => {
    const {id} = req.params

    try {
        await Company.findOneAndDelete({_id:id})
        res.json("deleted")
    } catch (error) {
        res.json(error)
    }
}

module.exports = {companyDelete}