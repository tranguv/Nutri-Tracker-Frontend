ARG NODE_VERSION=21.5.0

FROM node:${NODE_VERSION}-alpine

# Set the working directory 
WORKDIR /app

# Copy over dependency files 
COPY package.json ./
COPY package-lock.json ./

# Install 
RUN npm install --ignore-scripts

# Copy all files 
COPY . .

CMD ["npm", "run", "dev"]
