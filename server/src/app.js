const express = require('express');
const mongoose = require('mongoose');
const portfoliosRoutes = require('./routes/portfolios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/portfolios', portfoliosRoutes);

app.get('/', (_, res) => {
  res.send('<p>freelancer.api@v1.0</p>');
});

const start = async () => {
  try {
    await mongoose.connect('mongodb://mongo/freelancer');
    console.log('Connected to the MongoDB');

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (err) {
    console.error(
      'An error occured while connecting to the MongoDB.',
      err.message,
    );
  }
};
start();
