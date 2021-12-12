const express = require('express');

const app = express();

//listen on port 3000
app.listen(3000);

app.get('/',(req,res)=>{
    res.write('<p>hello world </p>');
})

app.post('/',(req,res)=>{

})

