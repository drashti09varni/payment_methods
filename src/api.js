const express = require('express')
const serverless = require('serverless-http')

const app = express();
const router = express.Route();

router.get('/', (req,res) =>{
    res.json({
        message:"Hosting npdejs backend successfully"
    })
})

app.use('/.netlify/functions/api', router)

module.exports=app;
module.exports.handler = serverless(app);