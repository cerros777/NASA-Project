const http = require('http');

const app = require('./app')

const {loadPlanetsData} = require('./modules/planet.modules');

const PORT = process.env.PORT || 7000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();
