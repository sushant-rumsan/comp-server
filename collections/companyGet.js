const Company = require('../models/companyModels')

//Get company information
const getCompany = async (req, res) => {
    const itemsCount = req.params.count
    try {
        const response = await Company.find({}).sort({createdAt: -1}).limit(itemsCount);
        res.json(response)
    } catch (error) {
        res.json(error.message)
    }
}

//Get single company information
const getOneCompany = async (req, res) => {
    const {id} = req.params
    try {
        const response = await Company.find({_id:id}).sort({createdAt: -1});
        res.json(response)
    } catch (error) {
        res.json(error.message)
    }
}

//Search company information
const searchCompany = async (req, res) => {
    const {city, language, hiring} = req.params
    try {
        if(city==='all' && language==='all' && hiring === 'all'){
            const response = await Company.find({}).sort({createdAt: -1})
            res.json(response)
        }
        else if(city==='all' && language==='all'){
        const response = await Company.find({$and : [{hiring: hiring}]}).sort({createdAt: -1})
        res.json(response)
        }
        else if(language==='all' && hiring === 'all'){
            const response = await Company.find({$and : [{city: city}]}).sort({createdAt: -1})
            res.json(response)
        }
        else if(city==='all' && hiring === 'all'){
            const response = await Company.find({$and : [{language: language}]}).sort({createdAt: -1})
            res.json(response)
        }
        else if(language==='all'){
            const response = await Company.find({$and : [{city: city}, {hiring: hiring}]}).sort({createdAt: -1})
            res.json(response)
        }
        else if(hiring==='all'){
            const response = await Company.find({$and : [{city: city}, {language: language}]}).sort({createdAt: -1})
            res.json(response)
        }
        else if(city==='all'){
            const response = await Company.find({$and : [{hiring: hiring}, {language: language}]}).sort({createdAt: -1})
            res.json(response)
        }
        else{
        const response = await Company.find({$and : [{city: city}, {language: language}, {hiring: hiring}]}).sort({createdAt: -1})
        res.json(response)
        }
        
    } catch (error) {
        res.json(error.message)
    }
}


module.exports = {getCompany, searchCompany, getOneCompany};