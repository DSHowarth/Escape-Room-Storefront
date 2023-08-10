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
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        party_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // No more than 5 people allowed in the escape room at a time
            validate: {
                max: 5
              }
        },
        // URL for qr code image. May change if storage solution changes
        qr_code_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation',
    }
)

module.exports = Reservation