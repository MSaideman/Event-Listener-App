const router = require('express').Router();
const userRoutes = require('./userRoutes');
const peventRoutes = require('./peventRoutes');

router.use('/users', userRoutes);
router.use('/pevents', peventRoutes);

module.exports = router;
