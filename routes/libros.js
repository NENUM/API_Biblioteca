const {Router, request, response} = require('express');
const { bookGet, booksGet, bookPost, bookPut, bookDelete } = require('../controllers/libros');

const router = Router();

router.get('/', bookGet);
router.get('/:id', booksGet);

router.post('/', bookPost);

router.put('/:id', bookPut);

router.delete('/:id', bookDelete);

module.exports = router;