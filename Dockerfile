# Use the official Node.js image
FROM node:22.1.0

# Install JDK
RUN apt update && apt-get update && apt-get install -y default-jdk

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend script
COPY xslt-transformer.js .

# Copy the frontend folder
COPY XSLT-Web_frontend /app/frontend

# Change to the frontend directory and install dependencies
WORKDIR /app/frontend
RUN npm install

# Build the frontend
RUN npm run build

# Change back to the app directory
WORKDIR /app

# Expose the backend port (only accessible within the container network)
EXPOSE 3000

# Command to start the backend server
CMD ["node", "xslt-transformer.js"]

