const router = require('express').Router();
const { User, Thought } = require('../../models');

router.route('/')
    .get(/*...*/)
    .post(/*...*/);

router.route('/:id')
    .get(/*...*/)
    .put(/*...*/)
    .delete(/*...*/);


router.route('/:userId/friends/:friendId')
    .post(/*...*/)
    .delete(/*...*/);

module.exports = router;