const redis = require('redis');
const redisClient = redis.createClient();

const connectClientRedis = ()=>{    
    return new Promise( (resolve, reject)=>{
        redisClient.connect()
        .then( ()=>{
            resolve(true);
        })
        .catch((error)=>{
            reject(error)
        });
    });
}


module.exports = { connectClientRedis };