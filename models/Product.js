const { Model, DataTypes } = require('sequelize');
const { databaseVersion } = require('../config/connection');
const sequelize = require('../config/connection');


class Product extends Model {}


Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    product_name: {
        type: Datatypes.STRING,
        allowNull: false,
    }
  },
  {
    price: {
        type: Datatypes.DECIMAL(10, 2),
        allowNull: false,
        // validate that it is decimal
        validate: {
            isDecimal: true
        }
    }
  },
  {
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // set default to 10
        defaultValue: 10,
        // validate it is an integer
        validate: {
            isInteger: true
        }
    }
  },
  {
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
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
    modelName: 'product'
  }
);

module.exports = Product