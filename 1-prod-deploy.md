# Prod Deploy

https://rlksr.com/2018/05/25/dockerizing-the-world/


  ` cp front-end-react-prod-deploy/docker-compose.yml .
  `

  `  cp front-end-react-prod-deploy/nginx.conf .
  `

  - pull images directly from Dockerhub via yml file

  - then:

      ` docker-compose up
      `

      ` Ctrl-C
      `

## SSL


  - encrypt all communications between two points

  - `some` guarantees that the server that you’re talking to is who you think they are => just for testing, better to use trusted SSL certificate over self-assigned cert(s)


  - Create a domain name via `Namecheap`

      - Already have a site that’s hosted at your domain name? No worries, you’ll be able to add a new subdomain for your new webapp without disturbing your site, plus you’ll have free HTTPS and caching to your site. For the rest of this tutorial, I’ll assume you have a domain name, and it’s mydomain.com.

  - check for SSL version on Mac:

    ` openssl version
    `

    ` mkdir .certs
    `//add this to .gitignore!!!

    ` cd .certs `



      <!-- openssl req -x509 -nodes -newkey rsa:4096 -keyout mydomain.pem -out mydomain.pem -days 365 -->
      //Common Name => your domain name

      - can also add -nodes (short for no DES) if you don't want to protect your private key with a passphrase. Otherwise it will prompt you for "at least a 4 character" password.

          - used this one instead:


              ` openssl req -nodes -x509 -subj '/CN=mydomainname' -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365`

      - Add ` -subj '/CN=localhost' ` to suppress questions about the contents of the certificate (`replace localhost with your desired domain`).

          - see https://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl

      - change the nginx.conf to `point to the new certificate and enable SSL` + change the cache expiration to three days for prod instead of 3s for dev

      - change the docker-compose.yml to `mount the certificates folder` and `expose port 443`:

          - full-stack-docker-prod-deploy_web_1 exited with code 1

          - https://localhost => localhost refused to connect.

          - stuck...come back tomorrow

          https://rlksr.com/2018/05/25/dockerizing-the-world/
