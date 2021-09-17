const sequelize = require('../config/connection');
const { User, Pevent } = require('../models');

const userData = require('./userData.json');
const peventData = require('./peventData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const pevent of peventData) {
    await Pevent.create({
      ...pevent,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
