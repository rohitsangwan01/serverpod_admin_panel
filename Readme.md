# Serverpod Admin Panel

<img src="https://serverpod.dev/assets/img/serverpod-logo-inverted.svg">

Ready to use admin panel for [Serverpod](https://serverpod.dev/)

## Get Started

Make sure [Node](https://nodejs.org/en) is installed, and install dependencies using , `yarn install`

Enter Database connection configurations in `config/default.json` file and make sure database is active

That's it, finally run `node index.js`

Checkout on [Youtube](https://youtu.be/2GDenxG5-3Q?si=oaHU8_gWxVk1EAZZ)


## Docker

Make sure docker is running, and `config/default.json` file is configured, if postgres is running on your local machine, then instead of `localhost` use `host.docker.internal` for database host

Run command: `docker build . -t serverpod_admin`

And finally run: `docker run -p 3000:3000 -d serverpod_admin`, and open `localhost:3000` in browser

To  check/get container id: `docker ps` and to kill server: `docker kill CONTAINER_ID`

## Screenshots

### Login 
<img width="600" src="https://github.com/rohitsangwan01/serverpod_admin_panel/assets/59526499/65ed687a-3bcf-4b06-987d-67b11029e205">

### Dashboard

<img width="600" src="https://github.com/rohitsangwan01/serverpod_admin_panel/assets/59526499/861b6963-4ec8-459a-bff4-de27b9b95cbd">

### Manage Tables

<img width="600" src="https://github.com/rohitsangwan01/serverpod_admin_panel/assets/59526499/676b3e76-67ba-4ed6-b4b9-05a50de4fec0">

### Run SQL Query

<img width="600" src="https://github.com/rohitsangwan01/serverpod_admin_panel/assets/59526499/56de899a-f102-44a9-b464-7fd0f795770c">

## Note

Using [AdminJs](https://adminjs.co/) for admin panel components

This is Just The Initial Version, feel free to Contribute or Report any Bug!
