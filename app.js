const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')
const db = require('./db')
const collection = 'todo'
app.use(bodyparser.json())
// const Joi = require('joi')
// const schema = Joi.object().keys({
// todo :Joi.string().required()
// })
app.use('/users', require('./user'));


app.get('/',(req,res)=>{
    res.sendFile(path.join( __dirname,'index.html'))
})
//read
app.get('/getTodos',(req,res)=>{
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
        if(err)
          console.log(err)
        else
        {
            console.log(documents)
            res.json(documents)
        }
    });
});
//delete
app.delete('/:id',(req,res)=>{

    const todoID = req.params.id;
    db.getDB().collection(collection).findOneAndDelete({_id :db.getPrimaryKey(todoID)},(err,result)=>{
        if(err)
            console.log(err)
        else
            res.json(result)
    })
 })
 //update
app.put('/:id',(req,res)=>{

    const todoID = req.params.id;
    const userInput = req.body;
//   db.getDB().collection(collection).findOneAndUpdate({_id :db.getPrimaryKey(todoID)},{$set:{todo: userInput.todo}},{returnOrignal : false},(err,result)=>{
     db.getDB().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(todoID)},{$set : {todo : userInput.todo}},{returnOriginal : false},(err,result)=>{
        if(err)
            console.log(err)
        else
        {
            res.json(result)
        }
    });
 });

 //Create
 app.post('/',(req,res)=>{

    const userInput = req.body
    db.getDB().collection(collection).insertOne(userInput,(err,result)=>{
        if(err)
          console.log(err)
        else
          res.json({result : result, document : result.ops[0]})
    })

 })
const port = process.env.PORT || 3000
db.connect((error)=>{
    if(error)
    {
        console.log("unable to connect to database"+"     "+error)
        process.exit(1)
    }
    else
    {
        app.listen(port,()=>{
            console.log("Coonected to database with port 3000")
       })
    
    }
 })

 

//  how to use mongodb with node js