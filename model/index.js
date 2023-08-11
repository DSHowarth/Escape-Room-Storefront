const User = require('./User');
const Reservation = require('./Reservation');

// Users can have many reservations, reservations can only have 1 user
User.hasMany(Reservation, {
    foreignKey: 'user_id'
});

Reservation.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {
    User,
    Reservation
}