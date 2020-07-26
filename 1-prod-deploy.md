# Prod Deploy

https://rlksr.com/2018/05/25/dockerizing-the-world/

  `cp front-end-react-prod-deploy/docker-compose.yml`

  `cp front-end-react-prod-deploy/nginx.conf .`

- pull images directly from Dockerhub via yml file

- then:

    `docker-compose up`

    `Ctrl-C`

## SSL

  - encrypt all communications between two points

  - `some` guarantees that the server that you’re talking to is who you think they are => just for testing, better to use trusted SSL certificate over self-assigned cert(s)


  - Create a domain name via `Namecheap` => or use existing domain name


  - check for SSL version on Mac:

    `openssl version`

    `mkdir .certs`//add this to .gitignore!!!

    `cd .certs`


     <!-- openssl req -x509 -nodes -newkey rsa:4096 -keyout mydomain.pem -out mydomain.pem -days 365 -->
      //Common Name => your domain name
- see https://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl for alternative openssl commands

       - can also add `-nodes` (short for no DES) if you don't want to protect your private key with a passphrase. Otherwise it will prompt you for "at least a 4 character" password

       - Add ` -subj '/CN=localhost' ` to suppress questions about the contents of the certificate (`replace localhost with your desired domain`).

          - used this instead of command above:


            `openssl req -x509 -subj '/CN=mydomainname' -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365`

           


      - change the nginx.conf to `point to the new certificate and enable SSL` + change the cache expiration to three days for prod instead of 3s for dev

      - change the docker-compose.yml to `mount the certificates folder` and `expose port 443`:

       - full-stack-docker-prod-deploy_web_1 exited with code 1

       - `https://localhost`

       - `https://localhost/api/`

## TODO:

- read => https://blog.dcycle.com/blog/2018-10-27/local-https-docker-compose/
