const app = require('./app').app(require('./db'))

console.log("server listening through port: " + process.env.PORT);
// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT || 3000);
module.exports = app;
