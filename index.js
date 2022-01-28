const express = require('express');
const app = express();
require('./Models/dbConfig.js');

app.listen(5500, () => console.log('Server Started: 5500'));