# FROM mhart/alpine-node:slim-10
FROM node:10.13.0-alpine
WORKDIR /usr/src/app
COPY ./ /usr/src/app
EXPOSE 80
RUN npm install
ENTRYPOINT [ "npm", "start" ]