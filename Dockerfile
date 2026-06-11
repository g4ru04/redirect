FROM node:22-alpine
WORKDIR /usr/src/app
COPY ./ /usr/src/app
EXPOSE 80
RUN npm install
ENTRYPOINT [ "npm", "start" ]