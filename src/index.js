const express = require('express');
const app = express();

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes')

app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on PORT : ${ServerConfig.PORT} `);
});
