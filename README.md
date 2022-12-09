# NxSaas

<a href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Setup 

Of course you will start with a fresh install
`yarn install`

After the install is complete go and create your `.env` from the `.example.env` file.

Make sure your Postgres server is running.

Next you will need to setup your prisma schema and migration. 
Run these commands

`yarn db:migrate && yarn db:push`





### Docker

Start the Redis and PostgreSQL Docker Containers
`docker-compose up -d`

Use`docker ps` to check the running containers

Destroy the running containers with
`docker-compose down`




### Server

to start the server you will need to run the start command

`yarn start:server`




### App

to start the app you will need to run the start command

`yarn start:app`






## StoryBook

Run `yarn storybook` for a storybook server. Navigate to http://localhost:4400/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
