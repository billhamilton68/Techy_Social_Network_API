const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

//  Add prefix of `/thoughts` to routes created in `thought-routes.js`
router.use('/thoughts', thoughtRoutes);
//  Add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

module.exports = router;
