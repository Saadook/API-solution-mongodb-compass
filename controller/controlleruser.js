const user = require('../model/modeluser')
var validator =require('validator')

exports.getAllUsersss = async (req,res)=>{
try{
//what im trying to achieive 
var users = await user.find() 
res.status(200).send(users)
}
catch(err){
res.status(404).send("404 not found")
}
}
exports.createUser= async (req,res)=>{
    const {name,password,age}=req.body
    try{
        const newUser = await user.create({
           name: name,
           password:password,
           age:age, 
        })
        console.log(newUser);
        res.status(201).send('data added')
    }catch(error){
        res.status(404).send('error')
    }   
}
exports.updateUser =async (req,res)=>{
    const {id}=req.params
    try{
const users=await user.findByIdAndUpdate(id,{
    ...req.body 
})
res.status(200).send(users)
    }
    catch(error){
        res.status(400).send({mssg:'error'})
    }
}
exports.deleteUser = async (req,res)=>{
    const{id}=req.params
    try{
        const users = await user.findOneAndDelete({_id:id})
        res.status(200).send(users)
    }catch(error){
        res.status(400).send({message:'error'})
        
    }
}
exports.findOne = async(req,res)=>{
    try{
        const {id}= req.params
        var users= await user.findOne({_id:id})
        res.status(200).send(users)
    }catch(error){
        res.status(400).send({message:'error'})
    }
}
exports.getAllUsers = async (req,res)=>{
    try{
    //what im trying to achieive 
    var users = await user.find() 
    
    res.status(200).send(users)
    }
    catch(err){
    res.status(404).send("404 not found")
    }
    }
exports.getUserByAge= async(req,res)=>{
    try{
        user.find({age: {$gt:25}})
    }catch(error){
        res.status(404).send("your age is under 20")
    }
}
exports.login= async (req,res)=>{
    const {email,password} = req.body
    try{
const data = await user.findOne({
    email:email
})
if(data !==undefined){
    if(data.password === password){
        res.status(201).send("you're logged in ")
    }
    res.status(404).send("there was a problem ")
}
else{
    res.send('there is no user with such name')
}
    }
    catch(err){
        res.status(404).send("there was a problem ")
    }
}
exports.createAcc=async(req,res)=>{
    const{email,password,firstName,lastName,age}=req.body
    if (validator.isEmail(email)){//check if email is valid using validator 
        return res.status(400).send('Invalid email format')
    }
    var userpassword = password
    if(password==undefined){
        userpassword= math.random().toString(36).slice(-8);
    }else if(password.length <6){
        res.status(404).send('password is less than 6 characteres')
    }else{
        const doc =await user.create({email:email,password:password,firstName:firstName,lastName:lastName,age:age})
        res.status(200).send(doc)
    }

}
//    delete : /user/15

// create :
//retreive email password from req.body
//if(email is valid email ){

// if(password undefined){
//     //generate a password fo the user 
// }
// else{
//     password.length >6
// }

// //}