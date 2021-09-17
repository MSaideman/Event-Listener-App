const router = require('express').Router();
const userRoutes = require('./userRoutes');
const peventRoutes = require('./peventRoutes');

router.use('/users', userRoutes);
router.use('/projects', peventRoutes);

module.exports = router;
