const express = require('express');
const app = express();
const initRoutes = require('./routes');

app.use(express.json());

initRoutes(app);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
