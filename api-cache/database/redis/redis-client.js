const redis = require('redis');

const connect = ()=>{    
    return new Promise( async (resolve, reject )=>{
        try{
            const redisClient = await redis.createClient();
            await redisClient.connect();
             resolve(redisClient);
        }catch(error){
            reject(error);
        }
    });
}

module.exports = { connect };