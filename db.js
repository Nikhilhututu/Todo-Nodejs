const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const dbname = "myDataBase"
// const url = "mongodb://localhost:27017"
const url = 'mongodb://127.0.0.1:27017' 
const mongoOptions  = {useNewUrlParser: true}

const state ={
    db :null
}
const connect  = (cb) =>{
    if(state.db)
     cb()
     else
     MongoClient.connect(url,mongoOptions,(err,client)=>{
       if(err)
       {
         console.log("Unable to connect!!!!")
         cb(err)
       }
        else
        {
          state.db = client.db(dbname)  
          cb()
        }

     })
}
const getPrimaryKey =(_id)=>{

    return ObjectId(_id)
}
const getDB = ()=>{
    return state.db
}
module.exports = {getDB,connect,getPrimaryKey}
