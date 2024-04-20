const express = require('express');
const booksRouter = express.Router()
const bodyParser = require('body-parser')


const books = [
{ name: "BOOK 1",
  id: 1,
  pages: 450
},
{   name: "BOOK 2",
  id: 2,
  pages: 450
},
{
    name: "BOOK 3",
  id: 3,
  pages: 450
}
]

booksRouter.get('/', (req,res)=>{try{
    res.send(books)}
    catch(err){
        res.status(500).send("internal server error")
    }
})

booksRouter.get('/:id', (req,res)=>
{
    const id =req.params.id
const book = books.find(book =>{return book.id === parseInt(id)}) 
if(!book){
    res.status(404).send('book does not exist')
    return
}

res.status(200)
res.send(book)
    
})

ffgb

res.status(200)
res.send(books)
    
})
    






    module.exports = booksRouter