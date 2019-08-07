//dc9d6f62-ae64-4edc-8f46-33fac02e9d45 privae Key
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const dbname = "test"
// const url = 'mongodb://127.0.0.1:27017' 
const url           = 'mongodb+srv://nik87_jain2017:X46UNsozTPCE4y4F@mangocluster-e9bhj.mongodb.net/test?retryWrites=true&w=majority'
const mongoOptions  = {useNewUrlParser: true}
const state ={
    db :null
}
const user   = require('./user')
const model  = require('./Model') 



const connect  = (cb) =>{
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) =>
    {
       if(error){
          cb(error)
           console.log('Unable to connect to database!!!!  '+"         "+error)    
        }
        else
        {
          state.db = client.db(dbname)          // Start to interact with the database
           cb()
          console.log('Start to interact with the database')    
        } 
    })

    model.MangooseConnect()
    
    console.log("@@@@@@@@");

   
}
 
  
const getPrimaryKey =(_id)=>{

    return ObjectId(_id)
}
const getDB = ()=>{
    return state.db
}
module.exports = {getDB,connect,getPrimaryKey}
