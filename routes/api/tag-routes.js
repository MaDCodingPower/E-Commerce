const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll( {
      include: {model: Product, through: ProductTag}
    });

    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: {model: Product, through: ProductTag}
    });

    if(!tagData) {
      res.status(404).json('No tags found with given ID!')
    };

    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404);
      return;
    };

    res.status(200).json(tagData)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!tagData) {
      res.status(404).json('No tags found with given ID!')
    };
    
    res.status(200).json(`tag ${req.params.id} deleted`);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
