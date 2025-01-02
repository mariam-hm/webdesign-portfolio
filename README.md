# My Portfolio App

This is a portfolio application built with Next.js, Contentful, and Docker. The app is configured to support both development and production environments using a single Dockerfile with multiple stages.

## Installation

### Prerequisites

- Docker
- Docker Compose

### Environment Variables

Create a `.env` file in the root of your project with the following variables:

```plaintext
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

### Building the App

To build the application for production:

```sh
docker-compose up --build
```

To build the application for development:

```sh
docker-compose -f docker-compose.dev.yml up --build
```

### Running the App

To run the application in production:

```sh
docker-compose up
```

To run the application in development:

```sh
docker-compose -f docker-compose.dev.yml up
```
