const express = require('express');
const app = express()
const router = require("./routes/index")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",router)
app.get('/',(req,res)=>{
    res.send('App is working')
})

const port = process.env.PORT || 3001
app.listen(port,()=>console.log(`App is running on port ${port}`))