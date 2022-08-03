const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'product_id',
    onDelete: 'SET NULL'
})

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'product_id'
})


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    },
    as: 'regTagProduct'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },

    as: 'regProductTag'
})

module.exports = { Category, Product, Tag, ProductTag };