const readerController = require('../controllers/reader.js')
const express = require('express')

const router = express.Router()


/**
 * @path - baseUrl/api/v1/reader
 */
router.get('/', readerController.reader)
router.get('/watch', readerController.watcher)
router.get('/txt', readerController.readerTXT)
// TODO: create a path for each logType
router.get('/erp', readerController.readerErpTXT)
router.get('/erpLatest', readerController.erpLive)
router.get('/latest', readerController.latestLog)

const readerRouter = router
module.exports = readerRouter
