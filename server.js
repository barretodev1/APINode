import express from 'express'
const app = express()
app.use(express.json())

const user = []
vv
app.post('/usuarios', (req,res) =>{
    user.push(req.body)
    res.status(201).json(req.body)
})


app.get('/usuarios', (req, res) =>{
    res.status(200).json(user)
})

app.listen(3000)
