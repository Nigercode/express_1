const express = require('express')
const bodyParser = require('body-parser')
const booksRoute = require('./Routes/books')
const authorsRoute = require('./Routes/authors')

const app = express()
const PORT = 4000
//using third part middleware(read more about express middleware like logger, morgan e.tc)
app.use(bodyParser.json())
  
 
//use static middle ware  to render static files without using fs.read module
app.use(express.static("public"))
// /About.html takes you straight to the About.html file in the specified folder here it is "public"

// simple routing here
const users = [

    { name: "USER 1",
      id: 1,
      hieght: "78cm"
    },
    {  name: "USER 2",
      id: 2,
      hieght: "76cm"},
    {
        name: "USER 3",
      id: 3,
      hieght: "78cm" 
    }]
app.get('/users', (req,res)=> {
res.send(users)

})
app.get('/users/:id', (req,res)=> {
const id =req.params.id
const user = users.find(user =>{return user.id === parseInt(id)} )
if(!user){
    res.status(404).send('user not found')
    return
}
res.status(200).send(user)
    
    })


app.delete('/users/:id', (req,res)=> {
const id =req.params.id
const Index = users.findIndex(user => {return user.id == parseInt(id)} )
if(Index == -1){
    res.status(404).send('user not found')
    return
}
users.splice(Index, 1)
res.send(users)
 
    })



// using middle for things like uthentication, grab password from query, log req e.tc
// app.use((req,res,next)=>{
//   console.log(`${JSON.stringify(req.headers)}: ${req.method}`)
//   next()
// })
// app.use((req,res,next)=>{
//   const ApiKey = req.query.ApiKey
//   if(ApiKey){
//     next()
//   }
// else{res.send("user not authorized")}
// })
//views in express js for rendering dynamic files using ejs
app.set("view engine", "ejs")
app.set('views', 'views')

app.get('/', (req,res)=>{
  res.render('index', {name: 'Aminat'})
})
//Express Router for different API Route
app.use('/books', booksRoute)
app.use('/authors', authorsRoute)



app.listen(PORT, ()=>{
    console.log(`server started sucessfully on ${PORT}`)})