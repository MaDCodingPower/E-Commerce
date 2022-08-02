const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Producttag extends Model {}


Producttag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    product_id: DataTypes.INTEGER,
    references: {
        model: 'product',
        key: 'id',
        unique: false
    }
  },
  {
    tag_id: DataTypes.INTEGER,
    references: {
        model: 'tag',
        key: 'id',
        unique: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'producttag'
  }
);

module.exports = Producttag