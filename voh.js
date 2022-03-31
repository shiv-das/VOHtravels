const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname)));
const home = require('./routes/homepage');
app.use(home);

app.listen(3000);
