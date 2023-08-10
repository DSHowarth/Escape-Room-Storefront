const { Model } = require('sequelize');
const sequelize = require('../config/connection');

class Reservation extends Model {}

Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // user_id Foreign Key
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // No more than 5 people allowed in the escape room at a time
        party_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 5
              }
        },
        // URL for qr code image. May change if storage solution changes
        qr_code_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)