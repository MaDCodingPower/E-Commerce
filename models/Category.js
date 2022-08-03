const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Category extends Model {}


Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    category_name: {
        type: Datatypes.STRING,
        allowNull: false,
    }
  },
  {
    product_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
    }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);

module.exports = Category