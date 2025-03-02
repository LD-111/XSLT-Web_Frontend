# XSLT Web Application

This repository contains a web application for running XSLT transformations with a Node.js backend and an Nginx frontend. The application is containerized using Docker and Docker Compose.
## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker
- Docker Compose

## Getting Started

Follow these steps to clone the repository, set up the application, and run it using Docker Compose.
Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/LD-111/XSLT-Web_Frontend.git
cd XSLT-Web_Frontend
```
## Set Up Environment

Make sure you have the following directory structure in the repository:
```go
XSLT-Web_Frontend/
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── xslt-transformer.js
├── XSLT-Web_frontend/
│   └── dist/
```

The XSLT-Web_frontend/dist directory should contain the built frontend files.

## Build and Run the Containers

Make sure all the related directories have the appropriate permissions.

Build the Docker images:

Navigate to the directory containing the docker-compose.yml file:

```bash
docker-compose build
```

Start the services:

```bash
docker-compose up
```

This command will start both the backend and frontend services. The backend will be accessible on port 3000 to only the container itself and the frontend will be accessible on port 5173.

## Access the Application

Once the containers are up and running, you can access the application in your web browser at http://localhost:5173.

## Stopping the Application

To stop the application, press Ctrl+C in the terminal where you ran docker-compose up. To remove the containers, networks, and volumes defined in the docker-compose.yml file, run:

```bash
docker-compose down
```
