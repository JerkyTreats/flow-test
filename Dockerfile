# pull official base image
FROM node:14.18.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install react-scripts@3.4.1 -g --silent
RUN yarn build

# add app
COPY . ./

# start app
CMD ["npm", "start"]
