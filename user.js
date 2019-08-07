
const router    = require('express').Router() 
const myUser    = require('./Model')
router.get('/', function(req, res){
  res.send('Users Index Page')
})
router.post('/users', (req, res) => {  
    const user = myUser.User(req.body) 
     user.save().then(() => {
     res.send(user)
     console.log("Post User "+user)   

    }).catch((e) => {
     res.status(400).send(e)    
     console.log("Post User Error "+e+"    "+user)   
    })
 }) 
 router.get('/users/', (req, res) => {  
    const _id = req.params.id // Access the id provided 
    console.log("     "+JSON.stringify(req.body)+"        "+_id)

  //   User.findById(_id).then((user) => {  
  //     if (!user) {
  //       return res.status(404).send()    
  //     } 
  //     res.send(user)}).catch((e) => {
  //     res.status(500).send()     
  // })
}) 
module.exports = router



