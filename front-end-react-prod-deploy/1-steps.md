# Steps

  `nvm use 13.11.0`

  `create-react-app front-end-react-prod-deploy`

  `cd create-react-app front-end-react-prod-deploy`

  `npm start`

  `touch Dockerfile`

  `touch docker-compose.yml`

  `touch nginx.conf`

  `npm run build`

  `docker-compose build`

  `docker-compose up`

  `http://localhost`

  - test connection to API => exec into backend API:

   `docker exec -it f44c008 sh`
        
   `curl http://localhost:3000`

   `curl -X POST http://localhost:3000`

   `curl http://localhost:3000`

   `curl http://localhost:3000/b72c37a0-a36a-11e9-a848-f3d8c835f79c`

  - working => BUT, not hooked up to the frontend yet:


    `touch src/List.js`

    `touch src/Post.js`

    - proxy the API by changing the `nginx.conf`

    - then:

      `npm run build`

      `docker-compose build`

      `docker-compose up`


      `http://localhost/:80`//returns headers saved to DB

- So far we have:


       - a REST-like API attached to a database, a React frontend attached to the API => we serve them both with an Nginx server => CORS is not an issue
        + similar to what will actually be run in the cloud


- ....cont...  

  https://rlksr.com/2018/05/25/dockerizing-the-world/

      `touch docker-build.sh`

      `docker login`

      `chmod +x docker-build.sh`

      `./docker-build.sh`
      

      - image for the frontend is now available from anywhere
