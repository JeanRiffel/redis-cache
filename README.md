# Redis-cache

This is a repo for studying <code><img height="20" src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white"></code>

Here I want to share simple examples which I have been using for studying.

### REDIS

Let's use the docker container of Redis to test how use it into a NodeJS app.

Access Redis Docker for installing<br> 
- [Redis Docker](https://hub.docker.com/_/redis)  


Create a new network using the command below
- ```docker network create my-own-network```

Run the container using the command below
- ```docker run --name myredis --network my-own-network -p 6379:6379 -d redis```

- use the command ```docker ps``` for cheking if your docker container is running well.


### App NodeJS

- type ```nvm use``` to use the right version of Node.

- ```npm install``` for installing all dependencies.


