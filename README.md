# NxSaas

<a href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Setup 

Of course you will start with a fresh install
`yarn install`

### Docker
Start the Redis and PostgreSQL Docker Containers
`docker-compose up -d`

Use`docker ps` to check the running containers

Destroy the running containers with
`docker-compose down`


## Development server

Run `nx serve App` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
