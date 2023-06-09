const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: `src/enviroment/.env.${process.env.NODE_ENV}`})
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

//console.log('env***',process.env.NODE_ENV);
//console.log('jwt', process.env.JWT_SECRET);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// connect with database
require('./src/connection/mongo')


// modules
app.use('/auth', require('./src/modules/users/auth.routes'));
app.use('/clothes',require('./src/modules/clothes/clothes.routes'));
app.use('/orders', require('./src/modules/orders/orders.routes'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
