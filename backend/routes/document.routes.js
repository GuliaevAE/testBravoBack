const Router = require('express');
const documentController = require('../controllers/document.controller');
const router = new Router()


router.post('/document', documentController.createDocument)
router.get('/document', documentController.getDocument)


module.exports = router