const {Router, request, response} = require('express');
const { userGet, usersGet, userPost, userPut, userDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', userGet);
router.get('/:id', usersGet);

router.post('/', userPost);

router.put('/:id', userPut);

router.delete('/:id', userDelete);


module.exports = router;
