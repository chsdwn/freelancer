const express = require('express');
const Portfolio = require('../models/Portfolio');

const router = express.Router();

router.get('/', async (_, res) => {
  const portfolios = await Portfolio.find();
  res.send(portfolios);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findById(id);
  res.send(portfolio);
});

router.post('/', async (req, res) => {
  await Portfolio.create(req.body);
  res.status(201).send();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const portfolio = await Portfolio.findById(id);
  portfolio.projectName = body.projectName;
  portfolio.title = body.title;
  portfolio.description = body.description;
  portfolio.imageUrl = body.imageUrl;
  portfolio.client = body.client;
  portfolio.category = body.category;
  await portfolio.save();

  res.status(201).send();
});

router.delete('/:id', async (req, res) => {
  await Portfolio.findByIdAndRemove(req.params.id);
  res.status(201).send();
});

module.exports = router;
