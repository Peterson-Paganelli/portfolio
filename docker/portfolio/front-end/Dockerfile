FROM node:16-alpine
WORKDIR /portfolio/front-end/
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]