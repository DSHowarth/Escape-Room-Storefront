const sequelize = require('../config/connection');
const { User, Reservation } = require('../model');
const dayjs = require('dayjs');

const userData = [
    {
        username: "MoonJune",
        email: "Junemoonsrealemail@gmail.com",
        password: "password1234"
    },
    {
        username: "ShowarthD",
        email: "DShowrealemail@gmail.com",
        password: "password12345"
    },
    {
        username: "GElena",
        email: "Elenasrealemail@gmail.com",
        password: "password123456"
    }
]

const reservationData = [
    {
        date: dayjs(),
        user_id: 1,
        party_size: 5
    }

]

const seedUsers = async () => {
    try{
    await User.bulkCreate(userData)
    console.log(await User.findAll())
    } catch(err) {
        console.log(err)
    }
}

const seedRes = async () => {
    await Reservation.bulkCreate(reservationData)
    console.log(await Reservation.findAll())
}

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedUsers();
  
    await seedRes();
  
    process.exit(0);
  };
  
  seedAll();
  
