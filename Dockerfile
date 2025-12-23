# syntax=docker/dockerfile:1
FROM node:22-alpine

# set working directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install app dependencies
RUN npm install

# install app
COPY . .

# build app
RUN npm run build

# expose port
EXPOSE 3000

# final configuration
CMD ["npm", "run", "dev"]