We make use of nodemon to restart the server when we make changes to it and npm-run-all to run multiple commands in parallel. With this in place, you can run the following to build the client-side app, bundle/transpile the server code and start up the server on port 3006:

Our server webpack config will watch for changes and our server will restart on changes.

### run the server app: yarn run dev / npm run dev

### you can go to http://localhost:3006/ and you should see our basic server-side rendered app!
