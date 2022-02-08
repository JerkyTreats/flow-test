# pull official base image
FROM node:14.18.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn global add react-scripts@3.4.1 --silent
RUN yarn install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
