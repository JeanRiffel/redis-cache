const express = require('express');
const redis = require('./database/redis/redis-client');

const server = express();
const port = 3000;
let redisClient;

server.get('/users/:id', async (req, res)=>{
    const userId = req.params.id;
    const keyUserId = 'UserID';
    const existKey = await redisClient.exists(keyUserId);

    let obj = {
        keyName : keyUserId,
        userId     
    }

    if(!existKey){
        await redisClient.set(keyUserId, userId);        
        obj.exists = false;
        obj.updated = false;
        console.log(`setting key [ ${keyUserId} ] with value [ ${userId} ] `);        
    }
    else{
        let valueKey = await redisClient.get(keyUserId);
        if(valueKey === userId ){ //if you already have in cache the value which are you looking for, you can use it.
            obj.exists = true;
            obj.updated = false;                
            console.log(`the key [ ${keyUserId} ] already exists in cache with value [ ${valueKey} ] `);                        
        }
        else{   //otherwise, if you have the value from a relational DB, so you can get the value and set it in the cache.
            obj.exists = true;  
            obj.updated = true;                
            await redisClient.set(keyUserId, userId);
            valueKey = await redisClient.get(keyUserId);
            console.log(`the key [ ${keyUserId} ] already exists and was updated in cache with value [ ${valueKey} ] `);                                    
        }
    }
    res.json( obj );
});

server.listen( port , async ()=>{
    try{
        redisClient = await redis.connect();
        console.log(`Server is running on port ${port} `);
    }catch(error){
        console.error(`Error ->  ${error} ` );
    }
});
