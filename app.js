const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'heroku') {
  throw new Error('This command is only intended to serve the app in a herkou environment')
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
