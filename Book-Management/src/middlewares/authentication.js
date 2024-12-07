const userModel = require("../models/userModel")
const bookModel = require("../models/bookModel")
const isValid = require("../validators/userValidator");

const jwt = require('jsonwebtoken')


//===================== Authenticate  ===========================================//

const isAuthenticate=async function(req,res,next){
    try {
        let token=req.headers["x-api-key"]
        if (!token){
        return res.status(400).send({status:false,message:"Please Provide a Token "})
    } 
    decodedToken = jwt.verify(
        token,
        'user-secret-key',(error, response) => {
            if (error) {
              return res
                .status(401)
                .send({ status: false, message: "Not a Valid Token or Token Expired" });
            }
          req.headers["userId"]=response.userId
          next()
      })
        
    
} catch (error) {
    return res.status(500).send({status:false,message:error.message})

}
    
}

const authorization = async function(req,res,next){

    try{
        const id = req.headers['userId']
    const bodyId = req.body.userId
    const paramId = req.params.bookId
    
    if(paramId)
    {
        if(!isValid.isValidId(paramId))
        return res.status(400).send({status:false,message:"Invalid bookId given"})
        const book = await bookModel.findOne({_id:paramId,isDeleted:false})
        if(!book)
        return res.status(404).send({status:false,message:"Book not found"})

        if(id!=book.userId)
        return res.status(403).send({status:false,message:"Unauthorised access"})

    }
    else if(bodyId)
    {   
        if(!isValid.isValidId(bodyId))
        return res.status(400).send({status:false,message:"Invalid userId given"})
        
        if(id!=bodyId)
        return res.status(403).send({status:false,message:"Unauthorised access"})
    }
    else
    return res.status(400).send({status:false,message:"No Id given"})

    next()


    }
    catch(error){
    return res.status(500).send({  status: false, message: error.message });
    }
}

module.exports.authorization = authorization
module.exports.isAuthenticate=isAuthenticate
