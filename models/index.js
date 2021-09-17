const User = require('./User');
const Pevent = require('./Pevent');

User.hasMany(Pevent, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pevent.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Pevent };
