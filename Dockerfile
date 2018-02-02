FROM node:carbon

# Create app directory
WORKDIR /usr/src/app-calculating

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available ([email protected]+)
COPY package.json ./
COPY bower.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN yarn

# Bundle app source
COPY . .

EXPOSE 8081
CMD [ "npm", "start"]