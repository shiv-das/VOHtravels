const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
router.get('/', (req, res, next) => {
  res.render(path.join(__dirname, '../', 'views', 'voh.ejs'));
});

module.exports = router;
