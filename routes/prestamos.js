const {Router, request, response} = require('express');
const { lendGet, lendsGet, lendPost, lendPut, lendDelete } = require('../controllers/prestamos');

const router = Router();


router.get('/', lendGet);
router.get('/:id', lendsGet);
router.post('/', lendPost);
router.put('/:id', lendPut);
router.delete('/:id', lendDelete);


module.exports = router;