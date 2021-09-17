const router = require('express').Router();
const { Pevent } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPevent = await Pevent.create({
      ...req.body,
      user_id: req.session.user_id,
      
    });
  
    res.status(200).json(newPevent);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const peventtData = await Pevent.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!peventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(peventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
