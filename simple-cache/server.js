const redis = require('redis');
const redisClient = redis.createClient();

const connectClient = ()=>{    
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

const main = async ()=>{
    try {
        const connected = await connectClient();
        console.log(`Is connected ${ connected} `);
        const key = 'userName'        //The key
        const name = 'Mary';          //The Value of Key is Mary

        if(connected){
            const existKey = await redisClient.exists(key);
            if (!existKey){                
                await redisClient.set(key, name);
                console.log(`setting key [ ${key} ] with value [ ${name} ] `);
            }else{
                const valueKey = await redisClient.get(key)
                console.log(`the key [ ${key} ] already exists in cache with value [ ${valueKey} ] `);
            }   
        }
    }catch(error){
        console.error(error);
    }
}

main();