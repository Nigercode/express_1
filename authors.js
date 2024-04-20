const express = require('express')
const bodyParser = require('body-parser')
const authorsRouter = express.Router()


const authors = [

    { name: "auth 1",
      id: 1,
      pages: 450
    },
    {   name: "Auth 2",
      id: 2,
      pages: 450
    },
    {
        name: " Auth 3",
      id: 3,
      pages: 450
    }
    
    ]


    authorsRouter.get('/', (req,res)=> {
    res.send(authors)
    })

    authorsRouter.get('/:id', (req,res)=> {
      const id = req.params.id
      const author = authors.find(author =>{return author.id === parseInt(id)
      })
      if(!author){
        res.send('author does not exist')
      }

      res.send(author)
      })
      
      authorsRouter.delete('/:id', (req,res)=> {
        const id = req.params.id
        const Index = authors.findIndex(author =>{return author.id === parseInt(id)
        })
        if(Index == -1){
          res.send('author does not exist')
        }
  
      authors.splice(Index,1)
      res.send(authors)
        })

        module.exports = authorsRouter