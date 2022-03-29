const express = require('express');
const server = express();
const port = 3000;

server.get('/users', (req, res)=>{
    res.json( { message : 'hello' } );

});

server.listen( port , ()=>{
    console.log(`Server is running on port ${port} `);
});
