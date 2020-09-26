const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const helmet = require('helmet');
const cors = require('cors');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

dotenv.config({ path: 'src/config/config.env' });

const app = express();

// Development Setup
if (process.env.NODE_ENV === 'development') {
  // require morgan if in development mode
  // setting morgan to dev: https://www.npmjs.com/package/morgan#dev
  app.use(require('morgan')('dev'));
}

// Put all the server-wide middleware here
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(helmet());
app.use(express.json());

// All routes here
app.use('/api/posts', require('./routes/post'));

// Custom middleware here
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT,
  // eslint-disable-next-line
  console.log(`Server up and running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));