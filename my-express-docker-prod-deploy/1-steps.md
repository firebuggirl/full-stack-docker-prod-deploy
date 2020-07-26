# View/POST/GET Headers

- Exec into Express container

  `docker exec -it f44c008 sh`
  
  `curl http://localhost:3000`

  `curl -X POST http://localhost:3000`

  `curl http://localhost:3000`

  `curl http://localhost:3000/b72c37a0-a36a-11e9-a848-f3d8c835f79`

  - `first command` returns an `empty list`. The `second command saves the headers of the request to the database and returns them`. The `third command returns the list with the id of the first as the only entry`. And finally, the `fourth command returns the headers from the post`, by using the id that was returned by the list.

  - This is a nasty dirty implementation that `should not be used as an example`. The post should return the id in a location header, the get all command should have some limit to the amount returned, the database access should be separate from the route code, etc, etc, but we just want `something that demonstrates persistence`. You can see for yourself by stopping the containers with `Ctrl-C and then running ‘docker-compose up’ again and the headers are still there`.

## Dockerizing the Frontend

  https://rlksr.com/2018/05/24/dockerizing-the-frontend/

- 1st: touch ups to backend:

    `touch docker-build.sh`

    `docker login`

- add the image of the API to Docker Hub:

  `chmod +x docker-build.sh`

   `./docker-build.sh`
