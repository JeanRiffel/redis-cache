# Redis-cache

This is a repo for studying <code><img height="20" src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white"></code>

Here I want to share simple examples which I have been using for studying.

### Install REDIS Container

Let's use the docker container of Redis to test how use it into a NodeJS app.

Redis container is available here<br> 
- [Redis Docker](https://hub.docker.com/_/redis)  

- For creating the container of Redis run the command below:

  ```docker run --name my-redis -p 6379:6379 -d redis```

- use the command ```docker ps``` for cheking if your docker container is running well.

### App NodeJS

- The app running on NodeJS 16, for set the right version of node, please follow these steps 

    Install the nvm package in your system ``` npm install -g nvm ``` 

- type ```nvm use``` to use the right version of Node.

- ```npm install``` for installing all dependencies.

### For running the app 

- ``` nvm use ``` 

- ``` npm run start ```
