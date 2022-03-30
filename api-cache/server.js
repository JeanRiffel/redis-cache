const express = require('express');
const redis = require('./database/redis/redis-client');

const server = express();
const port = 3000;

server.get('/users', (req, res)=>{
    res.json( { message : 'hello' } );
});

server.listen( port , async ()=>{
    try{
        await redis.connect();
        console.log(`Server is running on port ${port} `);
    }catch(error){
        console.error(error);
    }
});
