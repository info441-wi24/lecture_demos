FROM node
# go to app directory (basically `cd /app`)
WORKDIR /app

# only copy package files and install
# so it will only npm install when the
# package files are modified 
COPY package.json package-lock.json ./
RUN npm install

# copy the rest of the files
COPY . .

# container allowed to listen to port 3000
EXPOSE 3000

# when container starts, run `npm start`
ENTRYPOINT ["npm", "start"]