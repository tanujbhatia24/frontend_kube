# Learner Report Card - PRD

## Build Steps

Building the docker image. React application is running at port 3000 inside the container and is exposed at port 80 in host machine.

```
docker build -f Dockerfile -t frontend-lrccapstone .
docker run -it -p 80:3000 frontend-lrccapstone
```

View the project at http://127.0.0.1