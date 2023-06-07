const Company = require('../models/companyModels')

//Post company information
const postWorkout = async (req, res)=>{
    const {companyName, city, language, framework, phone, address, email, website, hiring, projects, title, post} = req.body
    try {
        const company = await Company.create({
            companyName,
            city,
            language,
            framework,
            phone,
            address,
            email,
            website,
            hiring,
            projects,
            title,
            post
            })
    res.status(200).json(company);
    } catch (error) {
        res.json(error.message)
    }
}


module.exports = {postWorkout};