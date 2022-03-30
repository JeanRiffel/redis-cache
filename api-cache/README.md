This is example show us how to use redis with express when we want to build an API.


## First step

The app running on NodeJS 16, for set the right version of node, please follow these steps bellow:

- Install the nvm package in your system
    ```
        npm install -g nvm
    ```

- type ```nvm use``` in order to use the right version of Node.

- run the command ```npm install``` for installing all dependencies.

## For running the app

- 1 - type ```nvm use```  for setting NodeJS version.

- 2 - type ``` npm run start```
    
    this command will run the ```docker-compose up``` , so the docker will set the redis image for the application use it.
    
- 3 - If you do not have the redis image on your machine, the command above will download the image and set the container, for this reason the first running will be tiny slow.
        
- 4 - On the terminal try to use this command: ```curl localhost:3000/users/10``` 

- 5 - With the command ```docker-compose down``` you can shutdown the container.