const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController')

router.get('/', controller.detail);
router.get('/load', controller.productLoad)


module.exports = router;