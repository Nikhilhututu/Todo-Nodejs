//dc9d6f62-ae64-4edc-8f46-33fac02e9d45 privae Key

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const dbname = "test"//

const url = ' mongodb+srv://nik87_jain2017:X46UNsozTPCE4y4F@mangocluster-e9bhj.mongodb.net/test?retryWrites=true&w=majority'

// const url = 'mongodb://127.0.0.1:27017' 
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoOptions  = {useNewUrlParser: true}

const state ={
    db :null
}
const connect  = (cb) =>{
    // if(state.db)
    //  cb()
    //  else
    //  MongoClient.connect(url,mongoOptions,(err,client)=>{
    //    if(err)
    //    {
    //      console.log("Unable to connect!!!!")
    //      cb(err)
    //    }
    //     else
    //     {
    //       state.db = client.db(dbname)  
    //       cb()
    //     }

    //  })
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
    
}
const getPrimaryKey =(_id)=>{

    return ObjectId(_id)
}
const getDB = ()=>{
    return state.db
}
module.exports = {getDB,connect,getPrimaryKey}
