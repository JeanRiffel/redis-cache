# Redis-cache

This is a repo for studying <code><img height="20" src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white"></code>

Here I want to share simple examples which I have been using for studying.

## Install REDIS Container

Let's use the docker container of Redis to test how use it into a NodeJS app.

Redis container is available here<br> 
- [Redis Docker](https://hub.docker.com/_/redis)  

- For creating the container of Redis run the command below on your machine:

  ```docker run --name my-redis -p 6379:6379 -d redis```

- use the command ```docker ps``` for cheking if your docker container is running well.
