const express = require('express');
const redisCache = require('./database/redis/clientRedis');


const server = express();
const port = 3000;

server.get('/users', (req, res)=>{
    res.json( { message : 'hello' } );

});

server.listen( port , ()=>{
    redisCache.connectClientRedis();
    console.log(`Server is running on port ${port} `);
});
