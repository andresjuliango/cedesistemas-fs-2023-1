const mongoose = require('mongoose')

//sevicio, ip, puerto, base de datos
const uri = "mongodb://127.0.0.1:27017/db_moreuse"

const conn = async () => {
  await mongoose.connect(uri)
  console.log('Connection mongo running');
}

conn().catch(error => console.error('Error connecting with mongo', error));
