const mongoose = require('mongoose')

//sevicio, ip, puerto, base de datos
const uri = process.env.MONGO_DB

const conn = async () => {
  await mongoose.connect(uri)
  console.log('Connection mongo running');
}

conn().catch(error => console.error('Error connecting with mongo', error));
