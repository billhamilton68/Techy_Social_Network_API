const router = require('express').Router();
const { Thought, User } = require('../../models');


router.route('/')
    .get(/*...*/)
    .post(/*...*/);

router.route('/:id')
    .get(/*...*/)
    .put(/*...*/)
    .delete(/*...*/);


router.route('/:thoughtId/reactions')
    .post(/*...*/)
    .delete(/*...*/);

module.exports = router;