# Lumberjack-vue-identity

## Dockerize Vue.js App

### Build the image

To test this locally ensure that docker is installed on your machine. 
Git clone this repository.
from your Shell navigate to the top level root directory `/identity-frontend`

Build the docker image of our Vue.js app:
`docker build -t identity-frontend-app`

### Run the app

Next we will run our Vue.js app in a docker container.
`docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 identity-frontend-app`

### Access the app
Using your browser see the app `http:\\localhost:8080`



## Project setup, use this if you wish to run this from your machine directory (no docker)
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).