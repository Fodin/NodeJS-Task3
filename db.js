const Sequelize = require('sequelize');

const sequelize = new Sequelize('gamedb', 'fodin', '111111', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
});

sequelize.authenticate().then(
  () => {
    console.log('Connected to DB');
  },

  (err) => {
    console.log(`Error: ${err}`);
  },
);

module.exports = sequelize;
