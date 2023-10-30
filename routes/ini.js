const { iniController } = require('../controllers')
const express = require('express')

const router = express.Router()


/**
 * @path - baseUrl/api/0.0.1/ini
 */
router.get('/', iniController.iniExtract)
router.get('/sim', iniController.iniSimulation)


const iniRouter = router
module.exports = iniRouter